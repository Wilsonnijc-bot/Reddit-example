package com.programming.techie.humanfirst.service;

import com.programming.techie.humanfirst.model.User;
import com.programming.techie.humanfirst.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Optional;

import static java.util.Collections.singletonList;

@Service
@AllArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String identifier) {
        String normalizedIdentifier = identifier == null ? "" : identifier.trim();
        boolean emailLogin = normalizedIdentifier.contains("@");

        Optional<User> userOptional = userRepository.findFirstByUsernameIgnoreCaseAndEnabledTrueOrderByUserIdDesc(normalizedIdentifier);
        if (userOptional.isEmpty() && emailLogin) {
            userOptional = userRepository.findFirstByEmailIgnoreCaseAndEnabledTrueOrderByUserIdDesc(normalizedIdentifier);
        }

        if (userOptional.isEmpty()) {
            boolean accountExists = userRepository.existsByUsernameIgnoreCase(normalizedIdentifier)
                    || (emailLogin && userRepository.existsByEmailIgnoreCase(normalizedIdentifier));
            if (accountExists) {
                throw new DisabledException("Account is not activated");
            }
        }

        User user = userOptional.orElseThrow(() -> new UsernameNotFoundException("No user Found with username/email : " + normalizedIdentifier));

        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                user.isEnabled(), true, true, true, getAuthorities("USER"));
    }

    private Collection<? extends GrantedAuthority> getAuthorities(String role) {
        return singletonList(new SimpleGrantedAuthority(role));
    }
}
