function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/account-verification/account-verification.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/account-verification/account-verification.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAccountVerificationAccountVerificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"verification-section\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header text-center\">\n          <h4>Account Verification</h4>\n        </div>\n        <div class=\"card-body text-center\">\n          <p class=\"verification-message\" [class.is-error]=\"isError\">{{ message }}</p>\n          <a routerLink=\"/login\" class=\"btn btn-primary mt-2\">Go to Login</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-section\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header text-center\"><h4>Login</h4></div>\n                <div class=\"card-body\">\n                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n                        <div class=\"form-group row\">\n                            <label for=\"user_name\" class=\"col-md-4 col-form-label text-md-right\">Username or Email</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" id=\"user_name\" class=\"form-control\" [formControlName]=\"'username'\" name=\"user_name\" required\n                                    placeholder=\"Username or email\" autofocus>\n                                <span *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\">\n                                   Please provide a valid username or email\n                                </span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"password\" class=\"col-md-4 col-form-label text-md-right\">Password</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"password\" id=\"password\" class=\"form-control\" [formControlName]=\"'password'\" name=\"password\" required>\n                                <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">\n                                  Password cannot be empty\n                                </span>\n                            </div>\n                        </div>\n\n                        <span class=\"col-md-6 offset-md-4 auth-cta-row\">\n                            <button type=\"submit\" class=\"login\">\n                                Login\n                            </button>\n                            <span class=\"auth-switch\">New User? <a routerLink=\"/sign-up\">SIGN UP</a></span>\n                        </span>\n                        <div class=\"login-failed\" *ngIf='this.isError'>\n                             <p class=\"login-failed-text\">Login Failed. Please check your credentials and try again.</p>\n                        </div>\n                        <div class=\"register-success\" *ngIf=\"this.registerSuccessMessage.length > 0\">\n                            <p class=\"register-success-text\">{{registerSuccessMessage}}</p>\n                       </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\"></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"register-section\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header text-center\">\n                    <h4>Register</h4>\n                </div>\n                <div class=\"card-body\">\n                    <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\">\n                        <div class=\"form-group row\">\n                            <label for=\"email_address\" class=\"col-md-4 col-form-label text-md-right\">E-Mail\n                                Address</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" [formControlName]=\"'email'\" id=\"email_address\" class=\"form-control\" name=\"email-address\" required\n                                    autofocus>\n                                <span *ngIf=\"!signupForm.get('email').valid && signupForm.get('email').touched\">\n                                    Please provide a valid email\n                                </span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label text-md-right\">User Name</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" [formControlName]=\"'username'\"class=\"form-control\" required autofocus>\n                                <span *ngIf=\"!signupForm.get('username').valid && signupForm.get('username').touched\">\n                                    Please provide a valid username\n                                </span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"password\" class=\"col-md-4 col-form-label text-md-right\">Password</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"password\" [formControlName]=\"'password'\" id=\"password\" class=\"form-control\" name=\"password\" required>\n                                <span *ngIf=\"!signupForm.get('password').valid && signupForm.get('password').touched\">\n                                    Please provide a valid Password\n                                </span>\n                            </div>\n                        </div>\n\n                        <span class=\"col-md-6 offset-md-4 auth-cta-row\">\n                            <button type=\"submit\" class=\"sign-up\">\n                                Sign Up\n                            </button>\n                            <span class=\"auth-switch\">Existing user? <a routerLink=\"/login\">Log In</a></span>\n                        </span>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\"></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/user-profile.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/user-profile.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container profile-wrapper\">\n  <div class=\"profile-summary\">\n    Welcome <b>{{name}}</b>.<br /> You have posted <b>{{postLength}}</b> time(s) and commented\n    <b>{{commentLength}}</b> time(s).\n    You can check your post and comment history below.\n  </div>\n  <hr />\n  <div class=\"profile-section-title\">\n    Your Posts:\n  </div>\n  <app-post-tile [posts]=\"posts\"></app-post-tile>\n  <hr />\n  <div class=\"profile-section-title\">\n    Your Comments:\n  </div>\n  <div *ngFor=\"let comment of comments\">\n    <div class=\"profile-comment\">\n      <div class=\"username\">\n        <a routerLink=\"/user/comment.username\">{{comment.userName}}</a>\n      </div>\n      <div>\n        <p>{{comment.duration}}</p>\n      </div>\n      <b>{{comment.text}}</b>\n    </div>\n    <hr />\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/community/community-directory/community-directory.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/community/community-directory/community-directory.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommunityCommunityDirectoryCommunityDirectoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"community-directory\">\n  <div class=\"community-directory-header\">\n    <h2>Discover Communities</h2>\n    <p class=\"text-muted\">Browse all communities.</p>\n  </div>\n\n  <p class=\"text-muted\" *ngIf=\"loading\">Loading communities...</p>\n  <p class=\"text-muted\" *ngIf=\"!loading && communities.length === 0\">No communities available yet.</p>\n\n  <div class=\"community-list\" *ngIf=\"!loading && communities.length > 0\">\n    <a class=\"community-item\" *ngFor=\"let community of communities\" [routerLink]=\"['/communities', community.slug]\">\n      <div class=\"community-item-title\">{{community.name}}</div>\n      <div class=\"community-item-description\">{{community.description || 'No description yet.'}}</div>\n    </a>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/community/community-page/community-page.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/community/community-page/community-page.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommunityCommunityPageCommunityPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"humanfirst-body\">\n  <div class=\"hf-layout community-shell\">\n    <app-hf-sidebar\n      [selectedDomain]=\"selectedDomain\"\n      [reloadToken]=\"sidebarReloadToken\"\n      (domainSelected)=\"onSidebarDomainSelected($event)\">\n    </app-hf-sidebar>\n\n    <main class=\"community-main-col\">\n      <div class=\"community-main-feed\">\n        <p class=\"text-muted\" *ngIf=\"loading\">Loading community...</p>\n\n        <section class=\"community-not-found\" *ngIf=\"!loading && notFound\">\n          <h2>Community Not Found</h2>\n          <p>The community you requested does not exist.</p>\n          <button type=\"button\" class=\"community-header-btn\" (click)=\"goToCommunityDirectory()\">Back to Communities</button>\n        </section>\n\n        <ng-container *ngIf=\"!loading && !notFound && community as currentCommunity\">\n          <section class=\"community-header-card\">\n            <div class=\"community-banner\" [style.background-image]=\"getBannerBackground(currentCommunity)\">\n              <div class=\"community-avatar-large\" [class.placeholder]=\"!currentCommunity.avatarImageUrl\">\n                <img *ngIf=\"currentCommunity.avatarImageUrl\" [src]=\"currentCommunity.avatarImageUrl\" [alt]=\"currentCommunity.name\">\n                <span *ngIf=\"!currentCommunity.avatarImageUrl\">{{getCommunityAvatarLabel()}}</span>\n              </div>\n            </div>\n\n            <div class=\"community-header-row\">\n              <div class=\"community-header-left\">\n                <div class=\"community-title-block\">\n                  <h1>{{currentCommunity.name}}</h1>\n                  <p>{{getCommunityTagline()}}</p>\n                </div>\n              </div>\n\n              <div class=\"community-header-actions\">\n                <button\n                  type=\"button\"\n                  class=\"community-header-btn create\"\n                  [disabled]=\"deletingCommunity\"\n                  (click)=\"goToCreatePost()\">\n                  Create Post\n                </button>\n\n                <button\n                  *ngIf=\"!communityDetail?.member\"\n                  type=\"button\"\n                  class=\"community-header-btn join\"\n                  [disabled]=\"joinInProgress || deletingCommunity\"\n                  (click)=\"joinCommunity()\">\n                  {{joinInProgress ? 'Joining...' : 'Join'}}\n                </button>\n\n                <button\n                  *ngIf=\"communityDetail?.member && !communityDetail?.creator\"\n                  type=\"button\"\n                  class=\"community-header-btn joined\"\n                  [disabled]=\"joinInProgress || deletingCommunity\"\n                  (click)=\"leaveCommunity()\">\n                  {{joinInProgress ? 'Updating...' : 'Joined'}}\n                </button>\n\n                <span *ngIf=\"communityDetail?.creator\" class=\"community-creator-pill\">Creator</span>\n              </div>\n            </div>\n          </section>\n\n          <section class=\"community-feed-card\">\n            <h3>Community Posts</h3>\n\n            <p class=\"text-muted\" *ngIf=\"postsLoading\">Loading posts...</p>\n            <p class=\"text-muted\" *ngIf=\"!postsLoading && posts.length === 0\">No posts in this community yet.</p>\n\n            <app-post-tile *ngIf=\"!postsLoading && posts.length > 0\" [posts]=\"posts\"></app-post-tile>\n          </section>\n        </ng-container>\n      </div>\n    </main>\n\n    <aside class=\"community-info-col\" *ngIf=\"!loading && !notFound && community as currentCommunity\">\n      <section class=\"community-info-card\">\n        <p class=\"community-info-label\">Community</p>\n        <h3>{{currentCommunity.name}}</h3>\n\n        <p class=\"community-info-description\">{{getDisplayedDescription()}}</p>\n        <button\n          *ngIf=\"shouldShowDescriptionToggle()\"\n          type=\"button\"\n          class=\"community-read-toggle\"\n          (click)=\"toggleDescription()\">\n          {{descriptionExpanded ? 'Read less' : 'Read more'}}\n        </button>\n\n        <div class=\"community-meta\">\n          <div class=\"community-meta-row\">\n            <span>Created</span>\n            <strong>{{getCommunityCreatedYearMonth()}}</strong>\n          </div>\n        </div>\n\n        <button type=\"button\" class=\"community-guide-link\" (click)=\"goToTopicArchive()\">Community Guide</button>\n\n        <div class=\"community-admin\" *ngIf=\"communityDetail?.canEdit\">\n          <h4>Creator Controls</h4>\n\n          <button\n            type=\"button\"\n            class=\"community-admin-btn\"\n            [disabled]=\"deletingCommunity\"\n            (click)=\"toggleEditMode()\">\n            {{editMode ? 'Cancel Edit' : 'Edit Community'}}\n          </button>\n\n          <button\n            type=\"button\"\n            class=\"community-admin-btn delete\"\n            [disabled]=\"deletingCommunity\"\n            (click)=\"deleteCommunity()\">\n            {{deletingCommunity ? 'Deleting...' : 'Delete Community'}}\n          </button>\n        </div>\n\n        <div class=\"community-edit\" *ngIf=\"editMode\">\n          <label for=\"community-description\">Description</label>\n          <textarea id=\"community-description\" rows=\"4\" [formControl]=\"editForm.controls.description\"></textarea>\n\n          <div class=\"community-media-block\">\n            <label>Avatar Headshot</label>\n            <input\n              #avatarImagePicker\n              type=\"file\"\n              class=\"community-media-input\"\n              [accept]=\"acceptedCommunityImageTypes\"\n              (change)=\"onAvatarFileSelected($event)\">\n            <div\n              class=\"community-media-dropzone\"\n              [class.drag-active]=\"isAvatarDragActive\"\n              [class.uploading]=\"isUploadingAvatar\"\n              role=\"button\"\n              tabindex=\"0\"\n              aria-label=\"Upload community avatar\"\n              (click)=\"onAvatarDropZoneClick(avatarImagePicker)\"\n              (keydown.enter)=\"onAvatarDropZoneClick(avatarImagePicker)\"\n              (keydown.space)=\"$event.preventDefault(); onAvatarDropZoneClick(avatarImagePicker)\"\n              (dragover)=\"onAvatarDragOver($event)\"\n              (dragleave)=\"onAvatarDragLeave($event)\"\n              (drop)=\"onAvatarDrop($event)\">\n              <strong>Upload avatar image</strong>\n              <span>Drag-and-drop or click</span>\n              <small>jpg, jpeg, png, webp, gif (max 8MB)</small>\n            </div>\n            <small *ngIf=\"isUploadingAvatar\">Uploading avatar...</small>\n            <div class=\"community-media-preview avatar\" *ngIf=\"avatarPreviewUrl && !isUploadingAvatar\">\n              <img [src]=\"avatarPreviewUrl\" alt=\"Avatar preview\">\n            </div>\n            <small *ngIf=\"avatarUploadFileName\">Selected avatar: {{avatarUploadFileName}}</small>\n          </div>\n\n          <div class=\"community-media-block\">\n            <label>Banner Background</label>\n            <input\n              #bannerImagePicker\n              type=\"file\"\n              class=\"community-media-input\"\n              [accept]=\"acceptedCommunityImageTypes\"\n              (change)=\"onBannerFileSelected($event)\">\n            <div\n              class=\"community-media-dropzone\"\n              [class.drag-active]=\"isBannerDragActive\"\n              [class.uploading]=\"isUploadingBanner\"\n              role=\"button\"\n              tabindex=\"0\"\n              aria-label=\"Upload community banner\"\n              (click)=\"onBannerDropZoneClick(bannerImagePicker)\"\n              (keydown.enter)=\"onBannerDropZoneClick(bannerImagePicker)\"\n              (keydown.space)=\"$event.preventDefault(); onBannerDropZoneClick(bannerImagePicker)\"\n              (dragover)=\"onBannerDragOver($event)\"\n              (dragleave)=\"onBannerDragLeave($event)\"\n              (drop)=\"onBannerDrop($event)\">\n              <strong>Upload banner image</strong>\n              <span>Drag-and-drop or click</span>\n              <small>jpg, jpeg, png, webp, gif (max 8MB)</small>\n            </div>\n            <small *ngIf=\"isUploadingBanner\">Uploading banner...</small>\n            <div class=\"community-media-preview banner\" *ngIf=\"bannerPreviewUrl && !isUploadingBanner\">\n              <img [src]=\"bannerPreviewUrl\" alt=\"Banner preview\">\n            </div>\n            <small *ngIf=\"bannerUploadFileName\">Selected banner: {{bannerUploadFileName}}</small>\n          </div>\n\n          <button\n            type=\"button\"\n            class=\"community-admin-btn save\"\n            [disabled]=\"saveInProgress || deletingCommunity || isUploadingAvatar || isUploadingBanner\"\n            (click)=\"saveCommunityChanges()\">\n            {{saveInProgress ? 'Saving...' : 'Save Changes'}}\n          </button>\n        </div>\n      </section>\n    </aside>\n\n    <div class=\"hf-right-gutter\" aria-hidden=\"true\"></div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/community/my-communities/my-communities.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/community/my-communities/my-communities.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommunityMyCommunitiesMyCommunitiesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-hf-app-shell\n  [selectedDomain]=\"selectedDomain\"\n  (domainSelected)=\"onSidebarDomainSelected($event)\">\n  <div shell-center>\n    <div class=\"my-communities-page\">\n      <h2>My Communities</h2>\n\n      <p class=\"text-muted\" *ngIf=\"loading\">Loading your communities...</p>\n\n      <div class=\"my-community-sections\" *ngIf=\"!loading\">\n        <section class=\"my-community-card\">\n          <h3>Joined Communities</h3>\n          <p class=\"text-muted\" *ngIf=\"myCommunities.joinedCommunities.length === 0\">You haven’t joined any communities yet.</p>\n\n          <a\n            class=\"my-community-item\"\n            *ngFor=\"let community of myCommunities.joinedCommunities\"\n            [routerLink]=\"['/communities', community.slug]\">\n            {{community.name}}\n          </a>\n        </section>\n\n        <section class=\"my-community-card\">\n          <h3>Created Communities</h3>\n          <p class=\"text-muted\" *ngIf=\"myCommunities.createdCommunities.length === 0\">You haven’t created any communities yet.</p>\n\n          <a\n            class=\"my-community-item\"\n            *ngFor=\"let community of myCommunities.createdCommunities\"\n            [routerLink]=\"['/communities', community.slug]\">\n            {{community.name}}\n          </a>\n        </section>\n      </div>\n    </div>\n  </div>\n\n  <div shell-right></div>\n</app-hf-app-shell>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n    <nav class=\"navbar fixed-top navbar-expand-lg hf-navbar\">\n        <div class=\"hf-navbar-inner\">\n            <a aria-label=\"Home\" class=\"logo\" routerLink=\"/\">\n                <span class=\"reddit-text\">\n                    Humanfirst\n                </span>\n            </a>\n\n            <div class=\"hf-nav-actions\">\n                <a aria-label=\"Create post\" class=\"create-link\" routerLink=\"/create\">\n                    <fa-icon [icon]=\"faPlus\"></fa-icon>\n                    <span>Create</span>\n                </a>\n\n                <button\n                    *ngIf=\"isLoggedIn\"\n                    type=\"button\"\n                    aria-label=\"My Communities\"\n                    class=\"create-link secondary-link\"\n                    (click)=\"goToMyCommunities()\">\n                    <fa-icon [icon]=\"faUsers\"></fa-icon>\n                    <span>My Communities</span>\n                </button>\n\n                <div *ngIf=\"isLoggedIn\" ngbDropdown class=\"user-menu\">\n                    <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                        <button (click)=\"goToMyPosts()\" ngbDropdownItem>My Posts</button>\n                        <button (click)=\"goToMyLikes()\" ngbDropdownItem>My Likes</button>\n                        <button (click)=\"goToMyComments()\" ngbDropdownItem>My Comments</button>\n                        <button (click)=\"goToUserProfile()\" ngbDropdownItem>My Profile</button>\n                        <button (click)=\"logout()\" ngbDropdownItem>Logout</button>\n                    </div>\n                    <button class=\"userdetails\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                        <img class=\"account-icon\" src=\"https://www.redditstatic.com/avatars/avatar_default_08_D4E815.png\">\n                        {{username}}\n                    </button>\n                </div>\n\n                <div *ngIf=\"!isLoggedIn\" class=\"auth-links\">\n                    <a routerLink=\"/sign-up\" class=\"hf-auth-link sign-up\">Sign up</a>\n                    <a routerLink=\"/login\" class=\"hf-auth-link login\">Login</a>\n                </div>\n            </div>\n        </div>\n    </nav>\n</header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"humanfirst-body\">\n  <div class=\"hf-layout\">\n    <app-hf-sidebar\n      [selectedDomain]=\"selectedDomain\"\n      (domainSelected)=\"onSidebarDomainSelected($event)\">\n    </app-hf-sidebar>\n\n    <main class=\"hf-main-col\">\n      <div class=\"hf-main-feed\">\n        <app-post-tile [posts]=\"posts\"></app-post-tile>\n      </div>\n    </main>\n\n    <div class=\"hf-right-gutter\" aria-hidden=\"true\"></div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/create-post/create-post.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/create-post/create-post.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostCreatePostCreatePostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row\">\n    <hr />\n    <div class=\"col-12 create-post-main\">\n      <div class=\"create-post-container\">\n        <form class=\"post-form\" [formGroup]=\"createPostForm\" (ngSubmit)=\"createPost()\">\n          <div class=\"form-group\">\n            <div class=\"create-post-heading\">Create Post</div>\n            <hr />\n\n            <input\n              type=\"text\"\n              [formControlName]=\"'postName'\"\n              class=\"form-control\"\n              style=\"margin-top: 5px\"\n              placeholder=\"Title\"\n            >\n\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              [formControlName]=\"'url'\"\n              style=\"margin-top: 5px\"\n              placeholder=\"URL (optional)\"\n            >\n\n            <div class=\"media-upload-block\" style=\"margin-top: 10px;\">\n              <input\n                #filePicker\n                type=\"file\"\n                class=\"media-input\"\n                [accept]=\"acceptedFileTypes\"\n                (change)=\"onMediaSelected($event)\"\n              >\n\n              <div\n                class=\"media-dropzone\"\n                [class.drag-active]=\"isDragActive\"\n                [class.uploading]=\"isUploadingAttachment\"\n                role=\"button\"\n                tabindex=\"0\"\n                aria-label=\"Attach image or video\"\n                (click)=\"onDropZoneClick(filePicker)\"\n                (keydown.enter)=\"onDropZoneClick(filePicker)\"\n                (keydown.space)=\"$event.preventDefault(); onDropZoneClick(filePicker)\"\n                (dragover)=\"onDragOver($event)\"\n                (dragleave)=\"onDragLeave($event)\"\n                (drop)=\"onDrop($event)\">\n                <strong>Drag and drop an image/video here</strong>\n                <span>or click to browse</span>\n                <small>Accepted: jpg, jpeg, png, gif, webp, heic, mp4, mov, webm, mkv</small>\n              </div>\n\n              <small *ngIf=\"isUploadingAttachment\">Uploading attachment...</small>\n\n              <div class=\"attachment-row\" *ngIf=\"!isUploadingAttachment && uploadedAttachmentFileName\">\n                <span>\n                  Attached {{uploadedAttachmentType}}: <strong>{{uploadedAttachmentFileName}}</strong>\n                </span>\n                <button type=\"button\" class=\"clear-attachment\" (click)=\"clearAttachment()\">Remove</button>\n              </div>\n            </div>\n\n            <label style=\"margin-top: 12px; margin-bottom: 4px;\">Communities (optional)</label>\n            <select class=\"form-control\" [formControlName]=\"'communityId'\" [disabled]=\"isLoadingCommunities\">\n              <option [ngValue]=\"null\">None</option>\n              <option *ngFor=\"let community of communityOptions\" [ngValue]=\"community.id\">{{community.name}}</option>\n            </select>\n            <small *ngIf=\"communityOptions.length === 0 && !isLoadingCommunities\" class=\"text-muted\" style=\"display: block; margin-top: 6px;\">\n              No communities available right now.\n            </small>\n\n            <label style=\"margin-top: 12px; margin-bottom: 4px;\">Branches (optional)</label>\n            <select class=\"form-control\" [formControlName]=\"'subredditName'\" [disabled]=\"isLoadingSubreddits\">\n              <option value=\"\">None</option>\n              <option *ngFor=\"let subreddit of subredditOptions\" [value]=\"subreddit.name\">{{subreddit.name}}</option>\n            </select>\n            <small *ngIf=\"subredditOptions.length === 0 && !isLoadingSubreddits\" class=\"text-muted\" style=\"display: block; margin-top: 6px;\">\n              No branches available right now.\n            </small>\n\n            <editor [formControlName]=\"'description'\" [init]=\"{\n                        height: 500,\n                        menubar: false,\n                        skin: 'oxide-dark',\n                        content_css: 'dark',\n                        plugins: [\n                          'advlist autolink lists link image charmap print preview anchor',\n                          'searchreplace visualblocks code fullscreen',\n                          'insertdatetime media table paste code help wordcount'\n                        ],\n                        toolbar:\n                          'undo redo | formatselect | bold italic backcolor | \\\n                          alignleft aligncenter alignright alignjustify | \\\n                          bullist numlist outdent indent | removeformat | help'\n                      }\"></editor>\n            <span>\n              <div style=\"margin-top: 5px\" class=\"float-right\">\n                <button type=\"button\" (click)=\"discardPost()\" class=\"btnDiscard\">Discard</button>\n                <button type=\"submit\" class=\"btnCreatePost\" [disabled]=\"isUploadingAttachment\">Post</button>\n              </div>\n            </span>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/my-likes/my-likes.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/my-likes/my-likes.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostMyLikesMyLikesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-likes-page\">\n  <h2>My Likes</h2>\n\n  <p class=\"text-muted\" *ngIf=\"loading\">Loading liked posts...</p>\n  <p class=\"text-muted\" *ngIf=\"!loading && posts.length === 0\">You haven’t liked any posts yet.</p>\n\n  <app-post-tile *ngIf=\"!loading && posts.length > 0\" [posts]=\"posts\"></app-post-tile>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/my-posts/my-posts.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/my-posts/my-posts.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostMyPostsMyPostsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-posts-page\">\n  <h2>My Posts</h2>\n\n  <p class=\"text-muted\" *ngIf=\"loading\">Loading your posts...</p>\n  <p class=\"text-muted\" *ngIf=\"!loading && posts.length === 0\">You haven’t created any posts yet.</p>\n\n  <app-post-tile\n    *ngIf=\"!loading && posts.length > 0\"\n    [posts]=\"posts\"\n    [showDeleteAction]=\"true\"\n    [deletingPostId]=\"deletingPostId\"\n    (deleteRequested)=\"onDeleteRequested($event)\">\n  </app-post-tile>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/view-post/view-post.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/view-post/view-post.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostViewPostViewPostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row\">\n    <hr />\n    <div class=\"col-12 view-post-main\">\n      <div class=\"row post\">\n        <div class=\"col-md-12\">\n          <span>\n            <span class=\"subreddit-text\" *ngIf=\"getCommunitySlug() as communitySlug; else communityLabelOnly\">\n              <a class=\"post-url\" [routerLink]=\"['/communities', communitySlug]\">{{getCommunityLabel()}}</a>\n            </span>\n            <ng-template #communityLabelOnly>\n              <span class=\"subreddit-text\">{{getCommunityLabel()}}</span>\n            </ng-template>\n            <span> . Posted\n              <span> {{post.duration}} </span>\n              by\n              <a class=\"username\" href=\"\">{{post.userName}}</a>\n            </span>\n          </span>\n          <hr />\n          <a *ngIf=\"isExternalLinkPost(); else postTitleNoUrl\" class=\"post-title post-url\" [href]=\"post.url\" target=\"_blank\" rel=\"noopener noreferrer\">{{post.postName}}</a>\n          <ng-template #postTitleNoUrl>\n            <span class=\"post-title\">{{post.postName}}</span>\n          </ng-template>\n          <div *ngIf=\"hasVideo()\">\n            <video class=\"post-video\" controls preload=\"metadata\" [src]=\"post.videoUrl\"></video>\n          </div>\n          <div *ngIf=\"getImageUrl() as imageUrl\">\n            <img class=\"post-image\" [src]=\"imageUrl\" [alt]=\"post.postName\">\n          </div>\n          <div>\n            <p class=\"post-text\" [innerHtml]=\"post.description\"></p>\n          </div>\n          <div class=\"post-actions\">\n            <app-vote-button [post]=\"post\"></app-vote-button>\n          </div>\n          <div class=\"post-comment\">\n            <form [formGroup]=\"commentForm\" (ngSubmit)=\"postComment()\">\n              <div class=\"form-group\">\n                <textarea class=\"form-control\" [formControlName]=\"'text'\" placeholder=\"Your Thoughts?\"></textarea>\n              </div>\n              <button type=\"submit\" class=\"comment-submit float-right\">Comment</button>\n            </form>\n          </div>\n          <div style=\"margin-top: 60px;\" *ngFor=\"let comment of comments\">\n            <div class=\"comment\">\n              <div class=\"username\">\n                <a routerLink=\"/user/comment.username\">{{comment.userName}}</a>\n              </div>\n              <div>\n                <p>{{comment.duration}}</p>\n              </div>\n              <b>{{comment.text}}</b>\n            </div>\n            <hr />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/app-shell/app-shell.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/app-shell/app-shell.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedAppShellAppShellComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"humanfirst-body\">\n  <div class=\"hf-shell-layout\">\n    <app-hf-sidebar\n      [selectedDomain]=\"selectedDomain\"\n      [reloadToken]=\"sidebarReloadToken\"\n      (domainSelected)=\"domainSelected.emit($event)\">\n    </app-hf-sidebar>\n\n    <main class=\"hf-shell-main\">\n      <div class=\"hf-shell-main-inner\">\n        <ng-content select=\"[shell-center]\"></ng-content>\n      </div>\n    </main>\n\n    <aside class=\"hf-shell-right\">\n      <div class=\"hf-shell-right-inner\">\n        <ng-content select=\"[shell-right]\"></ng-content>\n      </div>\n    </aside>\n\n    <div class=\"hf-right-gutter\" aria-hidden=\"true\"></div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/hf-sidebar/hf-sidebar.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/hf-sidebar/hf-sidebar.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedHfSidebarHfSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<aside class=\"hf-sidebar\">\n  <nav class=\"hf-nav\">\n    <button\n      *ngFor=\"let item of primaryNavItems\"\n      type=\"button\"\n      class=\"hf-row\"\n      [class.active]=\"isItemActive(item)\"\n      (click)=\"onPrimaryNavClick(item)\">\n      <fa-icon class=\"hf-icon\" [icon]=\"item.icon\"></fa-icon>\n      <span>{{item.label}}</span>\n    </button>\n  </nav>\n\n  <div class=\"hf-home-subitems\">\n    <button\n      *ngFor=\"let item of homeSubItems\"\n      type=\"button\"\n      class=\"hf-row hf-sub-row\"\n      [class.active]=\"isItemActive(item)\"\n      (click)=\"onHomeSubItemClick(item)\">\n      <fa-icon class=\"hf-icon\" [icon]=\"item.icon\"></fa-icon>\n      <span>{{item.label}}</span>\n    </button>\n  </div>\n\n  <hr class=\"hf-divider\" />\n\n  <section class=\"hf-section\">\n    <div class=\"hf-section-header\">\n      <span>TOPICS</span>\n    </div>\n    <button type=\"button\" class=\"hf-row hf-action-row hf-topic-month-row\" (click)=\"goToMonthlyTopic()\">\n      <span>{{monthlyTopicLabel}}</span>\n    </button>\n    <button type=\"button\" class=\"hf-row hf-action-row\" (click)=\"goToCurrentTopic()\">\n      <span>{{weeklyTopicLabel}}</span>\n    </button>\n    <button type=\"button\" class=\"hf-row hf-action-row\" (click)=\"goToTopicArchive()\">\n      <fa-icon class=\"hf-icon\" [icon]=\"faCompass\"></fa-icon>\n      <span>Discover previous Topics</span>\n    </button>\n  </section>\n\n  <hr class=\"hf-divider\" />\n\n  <button type=\"button\" class=\"hf-row hf-action-row\" (click)=\"goToCreateSubreddit()\">\n    <fa-icon class=\"hf-icon\" [icon]=\"faPlus\"></fa-icon>\n    <span>Start a community</span>\n  </button>\n\n  <button type=\"button\" class=\"hf-row hf-action-row\" (click)=\"goToMyComments()\">\n    <fa-icon class=\"hf-icon\" [icon]=\"faComments\"></fa-icon>\n    <span>My comments</span>\n  </button>\n\n  <hr class=\"hf-divider\" />\n\n  <section class=\"hf-section\">\n    <div class=\"hf-section-header\">\n      <span>COMMUNITIES</span>\n      <fa-icon [icon]=\"faChevronDown\"></fa-icon>\n    </div>\n    <button\n      *ngFor=\"let item of communityItems\"\n      type=\"button\"\n      class=\"hf-row\"\n      (click)=\"onCommunityClick(item)\">\n      <span class=\"hf-community-avatar\" [class.placeholder]=\"!hasCommunityAvatar(item)\">\n        <img *ngIf=\"hasCommunityAvatar(item)\" [src]=\"item.avatarImageUrl\" [alt]=\"item.name\">\n        <span *ngIf=\"!hasCommunityAvatar(item)\">{{getCommunityInitial(item)}}</span>\n      </span>\n      <span>{{item.name}}</span>\n    </button>\n\n    <button type=\"button\" class=\"hf-row hf-action-row\" (click)=\"goToCommunityDirectory()\">\n      <fa-icon class=\"hf-icon\" [icon]=\"faCompass\"></fa-icon>\n      <span>Discover More Communities</span>\n    </button>\n  </section>\n</aside>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/post-tile/post-tile.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/post-tile/post-tile.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedPostTilePostTileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"hf-post-card\" *ngFor=\"let post of posts\">\n  <div class=\"hf-post-header\">\n    <div class=\"hf-post-meta\">\n      <button type=\"button\" class=\"hf-community-link\" (click)=\"goToCommunity(post)\">h/{{getCommunityLabel(post)}}</button>\n      <span class=\"hf-dot\">•</span>\n      <span class=\"hf-author\">u/{{post.userName}}</span>\n      <span class=\"hf-dot\">•</span>\n      <span>{{post.duration}}</span>\n    </div>\n    <button type=\"button\" class=\"hf-overflow-btn\" aria-label=\"Post actions\">\n      <fa-icon [icon]=\"faEllipsisH\"></fa-icon>\n    </button>\n  </div>\n\n  <div class=\"hf-post-title\">\n    <a class=\"hf-post-title-link\" [routerLink]=\"getPostPath(post)\">{{post.postName}}</a>\n  </div>\n\n  <a class=\"hf-post-link-preview\" *ngIf=\"isExternalLinkPost(post)\" [href]=\"post.url\" target=\"_blank\" rel=\"noopener noreferrer\">\n    {{post.url}}\n  </a>\n\n  <ng-container *ngIf=\"isMediaPost(post); else textPostBlock\">\n    <button type=\"button\" class=\"hf-media-wrap\" (click)=\"goToPost(post)\" aria-label=\"Open post details\">\n      <ng-container *ngIf=\"isVideoPost(post); else imagePostBlock\">\n        <video class=\"hf-media-content\" controls preload=\"metadata\" [src]=\"post.videoUrl\"></video>\n        <div class=\"hf-media-badge\">\n          <fa-icon [icon]=\"faPlay\"></fa-icon>\n          <fa-icon [icon]=\"faVolumeMute\"></fa-icon>\n        </div>\n      </ng-container>\n      <ng-template #imagePostBlock>\n        <img class=\"hf-media-content\" *ngIf=\"getImageUrl(post) as imageUrl\" [src]=\"imageUrl\" [alt]=\"post.postName\">\n      </ng-template>\n    </button>\n  </ng-container>\n\n  <ng-template #textPostBlock>\n    <button type=\"button\" class=\"hf-text-preview-btn\" (click)=\"goToPost(post)\">\n      <p *ngIf=\"post.description\" class=\"hf-text-preview\" [innerHtml]=\"post.description\"></p>\n    </button>\n  </ng-template>\n\n  <div class=\"hf-post-footer\">\n    <app-vote-button [post]=\"post\"></app-vote-button>\n\n    <button type=\"button\" class=\"hf-action-btn\" (click)=\"goToPost(post)\">\n      <fa-icon [icon]=\"faComments\"></fa-icon>\n      <span>{{post.commentCount}}</span>\n    </button>\n\n    <button type=\"button\" class=\"hf-action-btn\">\n      <fa-icon [icon]=\"faHeart\"></fa-icon>\n      <span>{{post.voteCount}}</span>\n    </button>\n\n    <button type=\"button\" class=\"hf-action-btn\" (click)=\"sharePost(post)\">\n      <fa-icon [icon]=\"faShare\"></fa-icon>\n      <span>Share</span>\n    </button>\n\n    <button\n      *ngIf=\"showDeleteAction\"\n      type=\"button\"\n      class=\"hf-action-btn hf-delete-btn\"\n      [disabled]=\"isDeleting(post)\"\n      (click)=\"requestDelete(post)\">\n      <span>{{isDeleting(post) ? 'Deleting...' : 'Delete'}}</span>\n    </button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/vote-button/vote-button.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/vote-button/vote-button.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedVoteButtonVoteButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"vote-actions\">\n    <button type=\"button\" class=\"vote-btn like-btn\" [class.active]=\"post.upVote\" (click)=\"upvotePost()\" aria-label=\"Upvote\">\n        <fa-icon [icon]=\"faThumbsUp\"></fa-icon>\n    </button>\n    <button type=\"button\" class=\"vote-btn dislike-btn\" [class.active]=\"post.downVote\" (click)=\"downvotePost()\" aria-label=\"Downvote\">\n        <fa-icon [icon]=\"faThumbsDown\"></fa-icon>\n    </button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/create-subreddit/create-subreddit.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/create-subreddit/create-subreddit.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSubredditCreateSubredditCreateSubredditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 create-subreddit-main\">\n      <div class=\"create-subreddit-container\">\n        <form class=\"post-form\" [formGroup]=\"createSubredditForm\" (ngSubmit)=\"createSubreddit()\">\n          <div class=\"form-group\">\n            <div class=\"create-subreddit-heading\">Create Community</div>\n            <hr />\n\n            <input\n              type=\"text\"\n              [formControlName]=\"'title'\"\n              class=\"form-control\"\n              style=\"margin-top: 5px\"\n              placeholder=\"Community Name\">\n\n            <textarea\n              [formControlName]=\"'description'\"\n              style=\"width: 100%; margin-top: 5px\"\n              placeholder=\"Description\"></textarea>\n\n            <div>\n              <div style=\"margin-top: 5px\" class=\"float-right\">\n                <button type=\"button\" (click)=\"discard()\" class=\"btnDiscard\">Discard</button>\n                <button type=\"submit\" class=\"btnCreateSubreddit\">Create</button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/list-subreddits/list-subreddits.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/list-subreddits/list-subreddits.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSubredditListSubredditsListSubredditsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n      <hr />\n      <div class=\"col-12 list-subreddits-main\">\n        <h2>List of Subreddits</h2>\n        <ul>\n          <li *ngFor=\"let subreddit of subreddits\">\n              <a routerLink=\"/view-subreddit/{{subreddit.id}}\">{{subreddit.name}}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/topics/my-comments/my-comments.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topics/my-comments/my-comments.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTopicsMyCommentsMyCommentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-hf-app-shell\n  [selectedDomain]=\"selectedDomain\"\n  (domainSelected)=\"onSidebarDomainSelected($event)\">\n  <div shell-center>\n    <div class=\"my-comments-page\">\n      <h2>My Comments</h2>\n\n      <p class=\"text-muted\" *ngIf=\"loading\">Loading your comments...</p>\n      <p class=\"text-muted\" *ngIf=\"!loading && comments.length === 0\">You have not posted topic comments yet.</p>\n\n      <section class=\"my-comments-list\" *ngIf=\"!loading && comments.length > 0\">\n        <article class=\"my-comment-card\" *ngFor=\"let comment of comments; trackBy: trackByComment\">\n          <header class=\"my-comment-header\">\n            <div class=\"my-comment-topic\">\n              <span class=\"my-comment-stance\" [class.pro]=\"comment.stance === 'PRO'\" [class.con]=\"comment.stance === 'CON'\">\n                {{comment.stance}}\n              </span>\n              <button\n                *ngIf=\"comment.topicSlug\"\n                type=\"button\"\n                class=\"my-comment-topic-link\"\n                (click)=\"goToTopic(comment)\">\n                {{comment.weekTitle || 'Open topic'}}\n              </button>\n            </div>\n            <span class=\"my-comment-time\">{{comment.duration}}</span>\n          </header>\n\n          <p class=\"my-comment-month\" *ngIf=\"comment.monthTitle\">Month: {{comment.monthTitle}}</p>\n          <p class=\"my-comment-text\">{{comment.text}}</p>\n\n          <div class=\"my-comment-actions\">\n            <button\n              type=\"button\"\n              class=\"my-comment-delete\"\n              [disabled]=\"deletingCommentId === comment.id\"\n              (click)=\"deleteComment(comment)\">\n              {{deletingCommentId === comment.id ? 'Deleting...' : 'Delete'}}\n            </button>\n          </div>\n        </article>\n      </section>\n    </div>\n  </div>\n\n  <div shell-right></div>\n</app-hf-app-shell>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/topics/topic-comment-thread/topic-comment-thread.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topics/topic-comment-thread/topic-comment-thread.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTopicsTopicCommentThreadTopicCommentThreadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"thread-list\" *ngIf=\"comments && comments.length > 0\">\n  <li class=\"thread-item\" *ngFor=\"let comment of comments; trackBy: trackByComment\">\n    <article class=\"comment-card\" [ngClass]=\"getStanceClass(comment.stance)\">\n      <header>\n        <div class=\"comment-head-left\">\n          <span class=\"comment-user\">{{comment.userName}}</span>\n          <span class=\"comment-stance\" [ngClass]=\"getStanceClass(comment.stance)\">{{comment.stance}}</span>\n        </div>\n        <span class=\"comment-time\">{{comment.duration}}</span>\n      </header>\n\n      <p class=\"comment-text\">{{comment.text}}</p>\n\n      <div class=\"comment-actions\">\n        <button\n          type=\"button\"\n          class=\"comment-btn\"\n          [class.active]=\"comment.upVotedByCurrentUser\"\n          (click)=\"toggleCommentUpvote(comment)\">\n          Upvote ({{comment.upvoteCount}})\n        </button>\n        <button type=\"button\" class=\"comment-btn\" (click)=\"toggleReply(comment.id)\">\n          Reply\n        </button>\n        <button\n          *ngIf=\"canDeleteComment(comment)\"\n          type=\"button\"\n          class=\"comment-btn danger\"\n          [disabled]=\"isDeletingComment(comment.id)\"\n          (click)=\"deleteComment(comment)\">\n          {{isDeletingComment(comment.id) ? 'Deleting...' : 'Delete'}}\n        </button>\n      </div>\n\n      <div class=\"reply-editor\" *ngIf=\"replyOpenMap[comment.id]\">\n        <div class=\"reply-stance-selector\" role=\"radiogroup\" aria-label=\"Select your reply stance\">\n          <button\n            type=\"button\"\n            class=\"comment-btn stance pro\"\n            [class.active]=\"replyStanceMap[comment.id] === 'PRO'\"\n            [attr.aria-checked]=\"replyStanceMap[comment.id] === 'PRO'\"\n            role=\"radio\"\n            (click)=\"setReplyStance(comment.id, 'PRO')\">\n            Pro\n          </button>\n          <button\n            type=\"button\"\n            class=\"comment-btn stance con\"\n            [class.active]=\"replyStanceMap[comment.id] === 'CON'\"\n            [attr.aria-checked]=\"replyStanceMap[comment.id] === 'CON'\"\n            role=\"radio\"\n            (click)=\"setReplyStance(comment.id, 'CON')\">\n            Con\n          </button>\n        </div>\n\n        <textarea\n          [value]=\"replyTextMap[comment.id] || ''\"\n          (input)=\"replyTextMap[comment.id] = $any($event.target).value\"\n          placeholder=\"Write a reply\"></textarea>\n        <button type=\"button\" class=\"comment-btn primary\" (click)=\"submitReply(comment)\">\n          Post Reply\n        </button>\n      </div>\n    </article>\n\n    <app-topic-comment-thread\n      class=\"reply-thread\"\n      *ngIf=\"comment.replies && comment.replies.length > 0\"\n      [topicId]=\"topicId\"\n      [comments]=\"comment.replies\"\n      [isLoggedIn]=\"isLoggedIn\"\n      [currentUsername]=\"currentUsername\"\n      (threadUpdated)=\"onNestedThreadUpdated()\">\n    </app-topic-comment-thread>\n  </li>\n</ul>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/topics/topic-discussion.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topics/topic-discussion.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTopicsTopicDiscussionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-hf-app-shell\n  [selectedDomain]=\"selectedDomain\"\n  (domainSelected)=\"onSidebarDomainSelected($event)\">\n  <div shell-center>\n    <div class=\"topic-page\" *ngIf=\"!loading && topic; else topicStateTpl\">\n      <ng-container *ngIf=\"isMonthView(); else weekTopicTpl\">\n        <section class=\"topic-hero topic-hero-month\">\n          <p class=\"topic-kicker\">Topic of the month</p>\n          <h1 class=\"topic-title\">{{topic.monthTitle}}</h1>\n          <p class=\"topic-month\">This month is divided into weekly focus topics for deeper discussion.</p>\n          <button\n            type=\"button\"\n            class=\"topic-btn topic-month-cta\"\n            [disabled]=\"!topic.slug\"\n            (click)=\"goToCurrentWeekTopic()\">\n            Go to current Topic of the Week\n          </button>\n        </section>\n\n        <section class=\"topic-subdivisions topic-subdivisions-month\">\n          <h2>4 weekly topics this month</h2>\n          <p class=\"topic-subdivisions-meta\">Weekly tracks for this month:</p>\n\n          <ul class=\"topic-subdivision-cards\" *ngIf=\"topic.subdivisions?.length; else noSubdivisionsTpl\">\n            <li *ngFor=\"let subdivision of topic.subdivisions; trackBy: trackBySubdivision\">\n              <div class=\"topic-subdivision-card\">{{subdivision.title}}</div>\n            </li>\n          </ul>\n        </section>\n      </ng-container>\n\n      <ng-template #weekTopicTpl>\n        <section class=\"topic-hero\">\n          <p class=\"topic-kicker\">Topic of the week</p>\n          <h1 class=\"topic-title\">{{topic.weekTitle}}</h1>\n        </section>\n\n        <section class=\"topic-passage\">\n          <h2>About this week's topic</h2>\n          <div class=\"topic-passage-scroll\">\n            {{getWeeklyTopicBody()}}\n          </div>\n        </section>\n\n        <section class=\"topic-comments-section\">\n          <h3>Comments</h3>\n          <p class=\"topic-column-meta\">Top comments by upvotes, newest first when scores match.</p>\n\n          <div class=\"topic-comment-editor\">\n            <p class=\"topic-comment-editor-label\">Join the conversation</p>\n\n            <div class=\"topic-stance-selector\" role=\"radiogroup\" aria-label=\"Select your stance\">\n              <button\n                type=\"button\"\n                class=\"topic-stance-btn pro\"\n                [class.active]=\"selectedCommentStance === 'PRO'\"\n                [attr.aria-checked]=\"selectedCommentStance === 'PRO'\"\n                role=\"radio\"\n                (click)=\"setCommentStance('PRO')\">\n                Pro\n              </button>\n              <button\n                type=\"button\"\n                class=\"topic-stance-btn con\"\n                [class.active]=\"selectedCommentStance === 'CON'\"\n                [attr.aria-checked]=\"selectedCommentStance === 'CON'\"\n                role=\"radio\"\n                (click)=\"setCommentStance('CON')\">\n                Con\n              </button>\n            </div>\n\n            <textarea\n              [value]=\"commentText\"\n              (input)=\"commentText = $any($event.target).value\"\n              placeholder=\"Add a comment\"></textarea>\n            <button type=\"button\" class=\"topic-btn\" (click)=\"submitTopLevelComment()\">Post Comment</button>\n          </div>\n\n          <section class=\"topic-empty-state\" *ngIf=\"unifiedComments.length === 0\">\n            <div class=\"topic-empty-icon\" aria-hidden=\"true\">...</div>\n            <h4>Be the first to comment</h4>\n            <p>Nobody’s responded to this topic yet. Add your thoughts and get the conversation going.</p>\n          </section>\n\n          <app-topic-comment-thread\n            *ngIf=\"unifiedComments.length > 0\"\n            [topicId]=\"topic.id\"\n            [comments]=\"unifiedComments\"\n            [isLoggedIn]=\"isLoggedIn\"\n            [currentUsername]=\"currentUsername\"\n            (threadUpdated)=\"onThreadUpdated()\">\n          </app-topic-comment-thread>\n        </section>\n      </ng-template>\n    </div>\n\n    <ng-template #topicStateTpl>\n      <div class=\"topic-state\" *ngIf=\"loading\">Loading topic discussion...</div>\n      <div class=\"topic-state topic-state-error\" *ngIf=\"!loading && errorMessage\">{{errorMessage}}</div>\n    </ng-template>\n  </div>\n\n  <div shell-right>\n    <section class=\"topic-voting topic-voting-sticky\" *ngIf=\"!loading && topic && !isMonthView()\">\n      <div class=\"vote-header\">\n        <h2>Pros vs Cons</h2>\n        <span>{{topic.voteSummary.totalVotes}} total votes</span>\n      </div>\n\n      <div class=\"vote-bar\" aria-label=\"Pros and cons vote percentages\">\n        <div class=\"pro-fill\" [style.width.%]=\"getProBarPercent()\"></div>\n        <div class=\"con-fill\" [style.width.%]=\"getConBarPercent()\"></div>\n      </div>\n\n      <div class=\"vote-stats\">\n        <span>Pro: {{topic.voteSummary.proPercent}}% ({{topic.voteSummary.proVotes}})</span>\n        <span>Con: {{topic.voteSummary.conPercent}}% ({{topic.voteSummary.conVotes}})</span>\n      </div>\n\n      <div class=\"vote-actions\">\n        <button\n          type=\"button\"\n          class=\"topic-btn pro-btn\"\n          [class.active]=\"topic.voteSummary.userProVoted\"\n          (click)=\"vote('PRO')\">\n          Take Pro Side\n        </button>\n        <button\n          type=\"button\"\n          class=\"topic-btn con-btn\"\n          [class.active]=\"topic.voteSummary.userConVoted\"\n          (click)=\"vote('CON')\">\n          Take Con Side\n        </button>\n      </div>\n    </section>\n  </div>\n</app-hf-app-shell>\n\n<ng-template #noSubdivisionsTpl>\n  <p class=\"topic-subdivisions-empty\">Weekly topics will appear here once configured.</p>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/topics/topics-archive/topics-archive.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topics/topics-archive/topics-archive.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTopicsTopicsArchiveTopicsArchiveComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-hf-app-shell\n  [selectedDomain]=\"selectedDomain\"\n  (domainSelected)=\"onSidebarDomainSelected($event)\">\n  <div shell-center>\n    <div class=\"topics-archive\">\n      <h1>Discover previous Topics</h1>\n      <p class=\"archive-subtitle\">Browse earlier weekly topics and open any full discussion page.</p>\n\n      <div class=\"archive-state\" *ngIf=\"loading\">Loading previous topics...</div>\n      <div class=\"archive-state\" *ngIf=\"!loading && (!topics || topics.length === 0)\">No previous topics yet.</div>\n\n      <div class=\"archive-list\" *ngIf=\"!loading && topics && topics.length > 0\">\n        <article class=\"archive-card\" *ngFor=\"let topic of topics; trackBy: trackByTopic\">\n          <h2>{{topic.weekTitle}}</h2>\n          <p>Topic of the month - {{topic.monthTitle}}</p>\n          <a [routerLink]=\"['/topics', topic.slug]\">Open discussion</a>\n        </article>\n      </div>\n    </div>\n  </div>\n\n  <div shell-right></div>\n</app-hf-app-shell>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./post/create-post/create-post.component */
    "./src/app/post/create-post/create-post.component.ts");
    /* harmony import */


    var _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./subreddit/create-subreddit/create-subreddit.component */
    "./src/app/subreddit/create-subreddit/create-subreddit.component.ts");
    /* harmony import */


    var _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./subreddit/list-subreddits/list-subreddits.component */
    "./src/app/subreddit/list-subreddits/list-subreddits.component.ts");
    /* harmony import */


    var _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./post/view-post/view-post.component */
    "./src/app/post/view-post/view-post.component.ts");
    /* harmony import */


    var _auth_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./auth/user-profile/user-profile.component */
    "./src/app/auth/user-profile/user-profile.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _auth_account_verification_account_verification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./auth/account-verification/account-verification.component */
    "./src/app/auth/account-verification/account-verification.component.ts");
    /* harmony import */


    var _topics_topic_discussion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./topics/topic-discussion.component */
    "./src/app/topics/topic-discussion.component.ts");
    /* harmony import */


    var _topics_topics_archive_topics_archive_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./topics/topics-archive/topics-archive.component */
    "./src/app/topics/topics-archive/topics-archive.component.ts");
    /* harmony import */


    var _community_community_page_community_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./community/community-page/community-page.component */
    "./src/app/community/community-page/community-page.component.ts");
    /* harmony import */


    var _community_community_directory_community_directory_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./community/community-directory/community-directory.component */
    "./src/app/community/community-directory/community-directory.component.ts");
    /* harmony import */


    var _community_my_communities_my_communities_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./community/my-communities/my-communities.component */
    "./src/app/community/my-communities/my-communities.component.ts");
    /* harmony import */


    var _post_my_posts_my_posts_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./post/my-posts/my-posts.component */
    "./src/app/post/my-posts/my-posts.component.ts");
    /* harmony import */


    var _post_my_likes_my_likes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./post/my-likes/my-likes.component */
    "./src/app/post/my-likes/my-likes.component.ts");
    /* harmony import */


    var _topics_my_comments_my_comments_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./topics/my-comments/my-comments.component */
    "./src/app/topics/my-comments/my-comments.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'r/:subreddit/comments/:id/:slug',
      component: _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_9__["ViewPostComponent"]
    }, {
      path: 'r/:subreddit/comments/:id',
      component: _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_9__["ViewPostComponent"]
    }, {
      path: 'view-post/:id',
      redirectTo: 'r/post/comments/:id',
      pathMatch: 'full'
    }, {
      path: 'user-profile/:name',
      component: _auth_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'topics',
      children: [{
        path: '',
        component: _topics_topic_discussion_component__WEBPACK_IMPORTED_MODULE_13__["TopicDiscussionComponent"],
        pathMatch: 'full'
      }, {
        path: 'archive',
        component: _topics_topics_archive_topics_archive_component__WEBPACK_IMPORTED_MODULE_14__["TopicsArchiveComponent"]
      }, {
        path: ':slug',
        component: _topics_topic_discussion_component__WEBPACK_IMPORTED_MODULE_13__["TopicDiscussionComponent"]
      }]
    }, {
      path: 'communities/:slug',
      component: _community_community_page_community_page_component__WEBPACK_IMPORTED_MODULE_15__["CommunityPageComponent"]
    }, {
      path: 'communities',
      component: _community_community_directory_community_directory_component__WEBPACK_IMPORTED_MODULE_16__["CommunityDirectoryComponent"]
    }, {
      path: 'my-communities',
      component: _community_my_communities_my_communities_component__WEBPACK_IMPORTED_MODULE_17__["MyCommunitiesComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'my-posts',
      component: _post_my_posts_my_posts_component__WEBPACK_IMPORTED_MODULE_18__["MyPostsComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'my-likes',
      component: _post_my_likes_my_likes_component__WEBPACK_IMPORTED_MODULE_19__["MyLikesComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'my-comments',
      component: _topics_my_comments_my_comments_component__WEBPACK_IMPORTED_MODULE_20__["MyCommentsComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'list-subreddits',
      component: _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_8__["ListSubredditsComponent"]
    }, {
      path: 'create',
      component: _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__["CreatePostComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'create-post',
      redirectTo: '/create',
      pathMatch: 'full'
    }, {
      path: 'create-subreddit',
      component: _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_7__["CreateSubredditComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'sign-up',
      component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    }, {
      path: 'signup',
      redirectTo: '/sign-up',
      pathMatch: 'full'
    }, {
      path: 'account-verification/:token',
      component: _auth_account_verification_account_verification_component__WEBPACK_IMPORTED_MODULE_12__["AccountVerificationComponent"]
    }, {
      path: 'login',
      component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'humanfirst';
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/__ivy_ngcc__/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _token_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./token-interceptor */
    "./src/app/token-interceptor.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _shared_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/post-tile/post-tile.component */
    "./src/app/shared/post-tile/post-tile.component.ts");
    /* harmony import */


    var _shared_vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./shared/vote-button/vote-button.component */
    "./src/app/shared/vote-button/vote-button.component.ts");
    /* harmony import */


    var _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./subreddit/create-subreddit/create-subreddit.component */
    "./src/app/subreddit/create-subreddit/create-subreddit.component.ts");
    /* harmony import */


    var _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./post/create-post/create-post.component */
    "./src/app/post/create-post/create-post.component.ts");
    /* harmony import */


    var _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./subreddit/list-subreddits/list-subreddits.component */
    "./src/app/subreddit/list-subreddits/list-subreddits.component.ts");
    /* harmony import */


    var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @tinymce/tinymce-angular */
    "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");
    /* harmony import */


    var _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./post/view-post/view-post.component */
    "./src/app/post/view-post/view-post.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _auth_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./auth/user-profile/user-profile.component */
    "./src/app/auth/user-profile/user-profile.component.ts");
    /* harmony import */


    var _auth_account_verification_account_verification_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./auth/account-verification/account-verification.component */
    "./src/app/auth/account-verification/account-verification.component.ts");
    /* harmony import */


    var _topics_topic_discussion_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./topics/topic-discussion.component */
    "./src/app/topics/topic-discussion.component.ts");
    /* harmony import */


    var _topics_topics_archive_topics_archive_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./topics/topics-archive/topics-archive.component */
    "./src/app/topics/topics-archive/topics-archive.component.ts");
    /* harmony import */


    var _topics_topic_comment_thread_topic_comment_thread_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./topics/topic-comment-thread/topic-comment-thread.component */
    "./src/app/topics/topic-comment-thread/topic-comment-thread.component.ts");
    /* harmony import */


    var _community_community_page_community_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./community/community-page/community-page.component */
    "./src/app/community/community-page/community-page.component.ts");
    /* harmony import */


    var _community_community_directory_community_directory_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./community/community-directory/community-directory.component */
    "./src/app/community/community-directory/community-directory.component.ts");
    /* harmony import */


    var _community_my_communities_my_communities_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./community/my-communities/my-communities.component */
    "./src/app/community/my-communities/my-communities.component.ts");
    /* harmony import */


    var _post_my_posts_my_posts_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./post/my-posts/my-posts.component */
    "./src/app/post/my-posts/my-posts.component.ts");
    /* harmony import */


    var _post_my_likes_my_likes_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./post/my-likes/my-likes.component */
    "./src/app/post/my-likes/my-likes.component.ts");
    /* harmony import */


    var _topics_my_comments_my_comments_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./topics/my-comments/my-comments.component */
    "./src/app/topics/my-comments/my-comments.component.ts");
    /* harmony import */


    var _shared_hf_sidebar_hf_sidebar_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./shared/hf-sidebar/hf-sidebar.component */
    "./src/app/shared/hf-sidebar/hf-sidebar.component.ts");
    /* harmony import */


    var _shared_app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./shared/app-shell/app-shell.component */
    "./src/app/shared/app-shell/app-shell.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _shared_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_16__["PostTileComponent"], _shared_vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_17__["VoteButtonComponent"], _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_18__["CreateSubredditComponent"], _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_19__["CreatePostComponent"], _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_20__["ListSubredditsComponent"], _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_22__["ViewPostComponent"], _auth_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_24__["UserProfileComponent"], _auth_account_verification_account_verification_component__WEBPACK_IMPORTED_MODULE_25__["AccountVerificationComponent"], _topics_topic_discussion_component__WEBPACK_IMPORTED_MODULE_26__["TopicDiscussionComponent"], _topics_topics_archive_topics_archive_component__WEBPACK_IMPORTED_MODULE_27__["TopicsArchiveComponent"], _topics_topic_comment_thread_topic_comment_thread_component__WEBPACK_IMPORTED_MODULE_28__["TopicCommentThreadComponent"], _community_community_page_community_page_component__WEBPACK_IMPORTED_MODULE_29__["CommunityPageComponent"], _community_community_directory_community_directory_component__WEBPACK_IMPORTED_MODULE_30__["CommunityDirectoryComponent"], _community_my_communities_my_communities_component__WEBPACK_IMPORTED_MODULE_31__["MyCommunitiesComponent"], _post_my_posts_my_posts_component__WEBPACK_IMPORTED_MODULE_32__["MyPostsComponent"], _post_my_likes_my_likes_component__WEBPACK_IMPORTED_MODULE_33__["MyLikesComponent"], _topics_my_comments_my_comments_component__WEBPACK_IMPORTED_MODULE_34__["MyCommentsComponent"], _shared_hf_sidebar_hf_sidebar_component__WEBPACK_IMPORTED_MODULE_35__["HfSidebarComponent"], _shared_app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_36__["AppShellComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__["NgxWebstorageModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_21__["EditorModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModule"]],
      providers: [{
        provide: _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_21__["TINYMCE_SCRIPT_SRC"],
        useValue: 'tinymce/tinymce.min.js'
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/account-verification/account-verification.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/auth/account-verification/account-verification.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAccountVerificationAccountVerificationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".verification-section {\n  margin-top: 30px;\n}\n\n.verification-message {\n  color: #86decf;\n}\n\n.verification-message.is-error {\n  color: #ff8ea1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hY2NvdW50LXZlcmlmaWNhdGlvbi9hY2NvdW50LXZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2FjY291bnQtdmVyaWZpY2F0aW9uL2FjY291bnQtdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVyaWZpY2F0aW9uLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udmVyaWZpY2F0aW9uLW1lc3NhZ2Uge1xuICBjb2xvcjogIzg2ZGVjZjtcbn1cblxuLnZlcmlmaWNhdGlvbi1tZXNzYWdlLmlzLWVycm9yIHtcbiAgY29sb3I6ICNmZjhlYTE7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/auth/account-verification/account-verification.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/auth/account-verification/account-verification.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AccountVerificationComponent */

  /***/
  function srcAppAuthAccountVerificationAccountVerificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountVerificationComponent", function () {
      return AccountVerificationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/auth.service */
    "./src/app/auth/shared/auth.service.ts");

    var AccountVerificationComponent = /*#__PURE__*/function () {
      function AccountVerificationComponent(activatedRoute, authService) {
        _classCallCheck(this, AccountVerificationComponent);

        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.message = 'Verifying your account...';
        this.isError = false;
      }

      _createClass(AccountVerificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var token = this.activatedRoute.snapshot.paramMap.get('token');

          if (!token) {
            this.isError = true;
            this.message = 'Verification token is missing.';
            return;
          }

          this.authService.verifyAccount(token).subscribe({
            next: function next() {
              _this.isError = false;
              _this.message = 'Account activated successfully. You can now log in.';
            },
            error: function error(_error) {
              _this.isError = true;
              _this.message = _this.extractErrorMessage(_error);
            }
          });
        }
      }, {
        key: "extractErrorMessage",
        value: function extractErrorMessage(error) {
          var _a;

          if ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) {
            return error.error.message;
          }

          if (typeof (error === null || error === void 0 ? void 0 : error.error) === 'string' && error.error.trim().length > 0) {
            return error.error;
          }

          return 'Account verification failed. Please request a new activation email.';
        }
      }]);

      return AccountVerificationComponent;
    }();

    AccountVerificationComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AccountVerificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account-verification',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./account-verification.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/account-verification/account-verification.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./account-verification.component.css */
      "./src/app/auth/account-verification/account-verification.component.css"))["default"]]
    })], AccountVerificationComponent);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/auth.service */
    "./src/app/auth/shared/auth.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var isAuthenticated = this.authService.isLoggedIn();

          if (isAuthenticated) {
            return true;
          } else {
            this.router.navigateByUrl('/login');
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/auth/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-section {\n    margin: 100px;\n}\n\n.auth-cta-row {\n    display: inline-flex;\n    align-items: center;\n    gap: 12px;\n}\n\n.auth-switch {\n    color: var(--hf-text-muted);\n}\n\n.login-failed,\n.register-success {\n    text-align: center;\n    margin: 12px auto 0;\n    border: 1px solid var(--hf-border-strong);\n    width: 80%;\n    border-radius: 8px;\n    background-color: #2a121a;\n}\n\n.register-success {\n    background-color: #122a24;\n}\n\n.login-failed-text,\n.register-success-text {\n    text-align: center;\n    margin: 8px 10px;\n    font-weight: bold;\n    color: var(--hf-text);\n}\n\n@media (max-width: 768px) {\n  .login-section {\n    margin: 30px 10px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAxMDBweDtcbn1cblxuLmF1dGgtY3RhLXJvdyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG59XG5cbi5hdXRoLXN3aXRjaCB7XG4gICAgY29sb3I6IHZhcigtLWhmLXRleHQtbXV0ZWQpO1xufVxuXG4ubG9naW4tZmFpbGVkLFxuLnJlZ2lzdGVyLXN1Y2Nlc3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEycHggYXV0byAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlci1zdHJvbmcpO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTEyMWE7XG59XG5cbi5yZWdpc3Rlci1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIyYTI0O1xufVxuXG4ubG9naW4tZmFpbGVkLXRleHQsXG4ucmVnaXN0ZXItc3VjY2Vzcy10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA4cHggMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG9naW4tc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAzMHB4IDEwcHg7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/auth.service */
    "./src/app/auth/shared/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, activatedRoute, router, toastr) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastr = toastr;
        this.loginRequestPayload = {
          username: '',
          password: ''
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
          this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.registered !== undefined && params.registered === 'true') {
              _this2.toastr.success('Signup Successful');

              _this2.registerSuccessMessage = 'Please Check your inbox for activation email ' + 'activate your account before you Login!';
            }
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this3 = this;

          var _a, _b;

          this.loginRequestPayload.username = (((_a = this.loginForm.get('username')) === null || _a === void 0 ? void 0 : _a.value) || '').trim();
          this.loginRequestPayload.password = (_b = this.loginForm.get('password')) === null || _b === void 0 ? void 0 : _b.value;
          this.authService.login(this.loginRequestPayload).subscribe({
            next: function next() {
              _this3.isError = false;

              _this3.router.navigateByUrl('');

              _this3.toastr.success('Login Successful');
            },
            error: function error(_error2) {
              var _a;

              _this3.isError = true;

              _this3.toastr.error(((_a = _error2 === null || _error2 === void 0 ? void 0 : _error2.error) === null || _a === void 0 ? void 0 : _a.message) || 'Login failed');
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.css */
      "./src/app/auth/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/auth/shared/auth.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/shared/auth.service.ts ***!
    \*********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthSharedAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/__ivy_ngcc__/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(httpClient, localStorage) {
        _classCallCheck(this, AuthService);

        this.httpClient = httpClient;
        this.localStorage = localStorage;
        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.username = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl;
      }

      _createClass(AuthService, [{
        key: "signup",
        value: function signup(signupRequestPayload) {
          return this.httpClient.post("".concat(this.apiBaseUrl, "/api/auth/signup"), signupRequestPayload, {
            responseType: 'text'
          });
        }
      }, {
        key: "verifyAccount",
        value: function verifyAccount(token) {
          return this.httpClient.get("".concat(this.apiBaseUrl, "/api/auth/accountVerification/").concat(token), {
            responseType: 'text'
          });
        }
      }, {
        key: "login",
        value: function login(loginRequestPayload) {
          var _this4 = this;

          return this.httpClient.post("".concat(this.apiBaseUrl, "/api/auth/login"), loginRequestPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            _this4.localStorage.store('authenticationToken', data.authenticationToken);

            _this4.localStorage.store('username', data.username);

            _this4.localStorage.store('refreshToken', data.refreshToken);

            _this4.localStorage.store('expiresAt', data.expiresAt);

            _this4.loggedIn.emit(true);

            _this4.username.emit(data.username);

            return true;
          }));
        }
      }, {
        key: "getJwtToken",
        value: function getJwtToken() {
          return this.localStorage.retrieve('authenticationToken');
        }
      }, {
        key: "refreshToken",
        value: function refreshToken() {
          var _this5 = this;

          return this.httpClient.post("".concat(this.apiBaseUrl, "/api/auth/refresh/token"), this.getRefreshTokenPayload()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            _this5.localStorage.clear('authenticationToken');

            _this5.localStorage.clear('expiresAt');

            _this5.localStorage.store('authenticationToken', response.authenticationToken);

            _this5.localStorage.store('expiresAt', response.expiresAt);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.httpClient.post("".concat(this.apiBaseUrl, "/api/auth/logout"), this.getRefreshTokenPayload(), {
            responseType: 'text'
          }).subscribe({
            error: function error() {// Keep local logout behavior regardless of remote error.
            }
          });
          this.localStorage.clear('authenticationToken');
          this.localStorage.clear('username');
          this.localStorage.clear('refreshToken');
          this.localStorage.clear('expiresAt');
          this.loggedIn.emit(false);
          this.username.emit('');
        }
      }, {
        key: "getUserName",
        value: function getUserName() {
          return this.localStorage.retrieve('username');
        }
      }, {
        key: "getRefreshToken",
        value: function getRefreshToken() {
          return this.localStorage.retrieve('refreshToken');
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return !!this.getJwtToken();
        }
      }, {
        key: "getRefreshTokenPayload",
        value: function getRefreshTokenPayload() {
          return {
            refreshToken: this.getRefreshToken(),
            username: this.getUserName()
          };
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AuthService.prototype, "loggedIn", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AuthService.prototype, "username", void 0);
    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.css":
  /*!**************************************************!*\
    !*** ./src/app/auth/signup/signup.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".register-section {\n  margin: 100px;\n}\n\n.auth-cta-row {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.auth-switch {\n  color: var(--hf-text-muted);\n}\n\n@media (max-width: 768px) {\n  .register-section {\n    margin: 30px 10px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1zZWN0aW9uIHtcbiAgbWFyZ2luOiAxMDBweDtcbn1cblxuLmF1dGgtY3RhLXJvdyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi5hdXRoLXN3aXRjaCB7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LW11dGVkKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yZWdpc3Rlci1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDMwcHggMTBweDtcbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/auth.service */
    "./src/app/auth/shared/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(authService, router, toastr) {
        _classCallCheck(this, SignupComponent);

        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.signupRequestPayload = {
          username: '',
          email: '',
          password: ''
        };
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "signup",
        value: function signup() {
          var _this6 = this;

          var _a, _b, _c;

          this.signupRequestPayload.email = (_a = this.signupForm.get('email')) === null || _a === void 0 ? void 0 : _a.value;
          this.signupRequestPayload.username = (_b = this.signupForm.get('username')) === null || _b === void 0 ? void 0 : _b.value;
          this.signupRequestPayload.password = (_c = this.signupForm.get('password')) === null || _c === void 0 ? void 0 : _c.value;
          this.authService.signup(this.signupRequestPayload).subscribe({
            next: function next() {
              _this6.router.navigate(['/login'], {
                queryParams: {
                  registered: 'true'
                }
              });
            },
            error: function error(_error3) {
              var _a;

              _this6.toastr.error(((_a = _error3 === null || _error3 === void 0 ? void 0 : _error3.error) === null || _a === void 0 ? void 0 : _a.message) || 'Registration Failed! Please try again');
            }
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/auth/signup/signup.component.css"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/auth/user-profile/user-profile.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/auth/user-profile/user-profile.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthUserProfileUserProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-wrapper {\n  max-width: 980px;\n  margin: 0 auto;\n}\n\n.profile-summary {\n  border: 1px solid var(--hf-border);\n  border-radius: 10px;\n  background: var(--hf-surface);\n  color: var(--hf-text-secondary);\n  padding: 14px;\n  box-shadow: var(--hf-shadow);\n}\n\n.profile-section-title {\n  color: var(--hf-text);\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n\n.profile-comment {\n  border: 1px solid var(--hf-border);\n  border-radius: 8px;\n  background: var(--hf-surface-soft);\n  color: var(--hf-text-secondary);\n  padding: 10px;\n}\n\n.username {\n  color: var(--hf-text-muted);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQywrQkFBK0I7RUFDL0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5wcm9maWxlLXN1bW1hcnkge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1zdXJmYWNlKTtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogMTRweDtcbiAgYm94LXNoYWRvdzogdmFyKC0taGYtc2hhZG93KTtcbn1cblxuLnByb2ZpbGUtc2VjdGlvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4ucHJvZmlsZS1jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1zdXJmYWNlLXNvZnQpO1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udXNlcm5hbWUge1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1tdXRlZCk7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/auth/user-profile/user-profile.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/auth/user-profile/user-profile.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppAuthUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/post.service */
    "./src/app/shared/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/comment/comment.service */
    "./src/app/comment/comment.service.ts");

    var UserProfileComponent = /*#__PURE__*/function () {
      function UserProfileComponent(activatedRoute, postService, commentService) {
        var _this7 = this;

        _classCallCheck(this, UserProfileComponent);

        this.activatedRoute = activatedRoute;
        this.postService = postService;
        this.commentService = commentService;
        this.name = this.activatedRoute.snapshot.params.name;
        this.postService.getAllPostsByUser(this.name).subscribe(function (data) {
          _this7.posts = data;
          _this7.postLength = data.length;
        });
        this.commentService.getAllCommentsByUser(this.name).subscribe(function (data) {
          _this7.comments = data;
          _this7.commentLength = data.length;
        });
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]
      }, {
        type: src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"]
      }];
    };

    UserProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/user-profile.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-profile.component.css */
      "./src/app/auth/user-profile/user-profile.component.css"))["default"]]
    })], UserProfileComponent);
    /***/
  },

  /***/
  "./src/app/comment/comment.service.ts":
  /*!********************************************!*\
    !*** ./src/app/comment/comment.service.ts ***!
    \********************************************/

  /*! exports provided: CommentService */

  /***/
  function srcAppCommentCommentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentService", function () {
      return CommentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var CommentService = /*#__PURE__*/function () {
      function CommentService(httpClient) {
        _classCallCheck(this, CommentService);

        this.httpClient = httpClient;
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl;
      }

      _createClass(CommentService, [{
        key: "getAllCommentsForPost",
        value: function getAllCommentsForPost(postId) {
          return this.httpClient.get("".concat(this.apiBaseUrl, "/api/comments/by-post/").concat(postId));
        }
      }, {
        key: "postComment",
        value: function postComment(commentPayload) {
          return this.httpClient.post("".concat(this.apiBaseUrl, "/api/comments/"), commentPayload);
        }
      }, {
        key: "getAllCommentsByUser",
        value: function getAllCommentsByUser(name) {
          return this.httpClient.get("".concat(this.apiBaseUrl, "/api/comments/by-user/").concat(name));
        }
      }]);

      return CommentService;
    }();

    CommentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CommentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommentService);
    /***/
  },

  /***/
  "./src/app/community/community-directory/community-directory.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/community/community-directory/community-directory.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommunityCommunityDirectoryCommunityDirectoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".community-directory {\n  padding: 14px 20px 16px;\n  max-width: 980px;\n}\n\n.community-directory-header {\n  margin-bottom: 12px;\n}\n\n.community-directory-header h2 {\n  margin: 0;\n}\n\n.community-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 12px;\n}\n\n.community-item {\n  border: 1px solid var(--hf-border);\n  border-radius: 12px;\n  background: var(--hf-surface);\n  box-shadow: var(--hf-shadow);\n  padding: 14px;\n  text-decoration: none;\n  color: var(--hf-text-secondary);\n}\n\n.community-item:hover {\n  border-color: var(--hf-border-strong);\n  color: var(--hf-text);\n  text-decoration: none;\n}\n\n.community-item-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--hf-text);\n}\n\n.community-item-description {\n  margin-top: 6px;\n  font-size: 13px;\n  color: var(--hf-text-secondary);\n}\n\n@media (max-width: 1023px) {\n  .community-directory {\n    padding: 12px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbXVuaXR5L2NvbW11bml0eS1kaXJlY3RvcnkvY29tbXVuaXR5LWRpcmVjdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0REFBNEQ7RUFDNUQsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bml0eS9jb21tdW5pdHktZGlyZWN0b3J5L2NvbW11bml0eS1kaXJlY3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tdW5pdHktZGlyZWN0b3J5IHtcbiAgcGFkZGluZzogMTRweCAyMHB4IDE2cHg7XG4gIG1heC13aWR0aDogOTgwcHg7XG59XG5cbi5jb21tdW5pdHktZGlyZWN0b3J5LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5jb21tdW5pdHktZGlyZWN0b3J5LWhlYWRlciBoMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbW11bml0eS1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjYwcHgsIDFmcikpO1xuICBnYXA6IDEycHg7XG59XG5cbi5jb21tdW5pdHktaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhmLXN1cmZhY2UpO1xuICBib3gtc2hhZG93OiB2YXIoLS1oZi1zaGFkb3cpO1xuICBwYWRkaW5nOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5jb21tdW5pdHktaXRlbTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taGYtYm9yZGVyLXN0cm9uZyk7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29tbXVuaXR5LWl0ZW0tdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbn1cblxuLmNvbW11bml0eS1pdGVtLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLmNvbW11bml0eS1kaXJlY3Rvcnkge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/community/community-directory/community-directory.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/community/community-directory/community-directory.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CommunityDirectoryComponent */

  /***/
  function srcAppCommunityCommunityDirectoryCommunityDirectoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunityDirectoryComponent", function () {
      return CommunityDirectoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _community_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../community.service */
    "./src/app/community/community.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var CommunityDirectoryComponent = /*#__PURE__*/function () {
      function CommunityDirectoryComponent(communityService, toastr) {
        _classCallCheck(this, CommunityDirectoryComponent);

        this.communityService = communityService;
        this.toastr = toastr;
        this.communities = [];
        this.loading = true;
      }

      _createClass(CommunityDirectoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.communityService.getAllCommunities().subscribe({
            next: function next(communities) {
              _this8.communities = communities || [];
              _this8.loading = false;
            },
            error: function error() {
              _this8.communities = [];
              _this8.loading = false;

              _this8.toastr.error('Failed to load communities');
            }
          });
        }
      }]);

      return CommunityDirectoryComponent;
    }();

    CommunityDirectoryComponent.ctorParameters = function () {
      return [{
        type: _community_service__WEBPACK_IMPORTED_MODULE_2__["CommunityService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    CommunityDirectoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-community-directory',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./community-directory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/community/community-directory/community-directory.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./community-directory.component.css */
      "./src/app/community/community-directory/community-directory.component.css"))["default"]]
    })], CommunityDirectoryComponent);
    /***/
  },

  /***/
  "./src/app/community/community-page/community-page.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/community/community-page/community-page.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommunityCommunityPageCommunityPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".humanfirst-body {\n  padding: 12px 20px 0;\n}\n\n.hf-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.community-main-col {\n  min-width: 0;\n  padding-bottom: 12px;\n}\n\n.community-main-feed {\n  width: 100%;\n  max-width: 720px;\n  margin: 0;\n}\n\n.community-header-card {\n  border: 1px solid var(--hf-border);\n  border-radius: 12px;\n  background: var(--hf-surface);\n  box-shadow: var(--hf-shadow);\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n\n.community-banner {\n  position: relative;\n  min-height: 188px;\n  background-size: cover;\n  background-position: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n\n.community-avatar-large {\n  position: absolute;\n  left: 18px;\n  bottom: -42px;\n  width: 84px;\n  height: 84px;\n  border-radius: 50%;\n  border: 4px solid #f4f6ff;\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);\n  overflow: hidden;\n  background: #1a2233;\n  color: #dbe6ff;\n  font-size: 30px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.community-avatar-large img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.community-header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 50px 18px 18px;\n}\n\n.community-header-left {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  padding-left: 96px;\n}\n\n.community-title-block {\n  min-width: 0;\n}\n\n.community-title-block h1 {\n  margin: 0;\n  color: var(--hf-text);\n  font-size: 28px;\n  line-height: 1.15;\n}\n\n.community-title-block p {\n  margin: 8px 0 0;\n  color: var(--hf-text-secondary);\n  font-size: 14px;\n  line-height: 1.4;\n}\n\n.community-header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.community-header-btn {\n  border: 1px solid var(--hf-border-strong);\n  border-radius: 999px;\n  background: var(--hf-surface-soft);\n  color: var(--hf-text-secondary);\n  padding: 8px 13px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.community-header-btn:hover {\n  background: #1b1b28;\n  color: var(--hf-text);\n}\n\n.community-header-btn.create {\n  border-color: #395f9f;\n  background: #17315f;\n  color: #dce8ff;\n}\n\n.community-header-btn.create:hover {\n  background: #1d3a6e;\n}\n\n.community-header-btn.join {\n  border-color: #2e6758;\n  background: #143b31;\n  color: #c1f8e7;\n}\n\n.community-header-btn.joined {\n  border-color: #594f2c;\n  background: #312c16;\n  color: #efe0aa;\n}\n\n.community-header-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.community-creator-pill {\n  border: 1px solid var(--hf-border-strong);\n  border-radius: 999px;\n  padding: 7px 12px;\n  font-size: 12px;\n  color: var(--hf-text-secondary);\n  background: rgba(255, 255, 255, 0.06);\n}\n\n.community-feed-card {\n  border: 1px solid var(--hf-border);\n  border-radius: 12px;\n  background: var(--hf-surface);\n  box-shadow: var(--hf-shadow);\n  padding: 14px;\n}\n\n.community-feed-card h3 {\n  margin: 0 0 10px;\n  font-size: 18px;\n  color: var(--hf-text);\n}\n\n.community-info-col {\n  min-width: 0;\n}\n\n.community-info-card {\n  border: 1px solid var(--hf-border);\n  border-radius: 12px;\n  background: var(--hf-surface);\n  box-shadow: var(--hf-shadow);\n  padding: 14px;\n}\n\n.community-info-label {\n  margin: 0;\n  color: var(--hf-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-size: 11px;\n  font-weight: 700;\n}\n\n.community-info-card h3 {\n  margin: 8px 0;\n  font-size: 22px;\n  color: var(--hf-text);\n}\n\n.community-info-description {\n  margin: 0;\n  color: var(--hf-text-secondary);\n  font-size: 14px;\n  line-height: 1.5;\n}\n\n.community-read-toggle {\n  margin-top: 8px;\n  border: 0;\n  background: transparent;\n  color: #93cefb;\n  font-weight: 600;\n  padding: 0;\n  cursor: pointer;\n}\n\n.community-read-toggle:hover {\n  text-decoration: underline;\n}\n\n.community-meta {\n  margin-top: 14px;\n  border-top: 1px solid var(--hf-border);\n  padding-top: 10px;\n}\n\n.community-meta-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  font-size: 13px;\n}\n\n.community-meta-row span {\n  color: var(--hf-text-muted);\n}\n\n.community-meta-row strong {\n  color: var(--hf-text-secondary);\n}\n\n.community-guide-link {\n  width: 100%;\n  margin-top: 12px;\n  border: 1px solid var(--hf-border-strong);\n  border-radius: 8px;\n  padding: 8px 10px;\n  background: transparent;\n  color: var(--hf-text-secondary);\n  text-align: left;\n  cursor: pointer;\n}\n\n.community-guide-link:hover {\n  background: #181824;\n  color: var(--hf-text);\n}\n\n.community-admin {\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px solid var(--hf-border);\n}\n\n.community-admin h4 {\n  margin: 0 0 8px;\n  color: var(--hf-text);\n  font-size: 14px;\n}\n\n.community-admin-btn {\n  width: 100%;\n  border: 1px solid var(--hf-border-strong);\n  border-radius: 8px;\n  background: var(--hf-surface-soft);\n  color: var(--hf-text-secondary);\n  padding: 8px 10px;\n  font-size: 13px;\n  cursor: pointer;\n  margin-bottom: 8px;\n}\n\n.community-admin-btn:hover {\n  background: #1b1b28;\n  color: var(--hf-text);\n}\n\n.community-admin-btn.delete {\n  border-color: #5b2536;\n  color: #ff9bb2;\n}\n\n.community-admin-btn.delete:hover {\n  background: #3b1723;\n  color: #ffc7d5;\n}\n\n.community-admin-btn.save {\n  margin-bottom: 0;\n}\n\n.community-admin-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.community-edit {\n  margin-top: 8px;\n}\n\n.community-edit label {\n  display: block;\n  margin-bottom: 4px;\n  color: var(--hf-text-secondary);\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.community-edit textarea,\n.community-edit input {\n  width: 100%;\n  margin-bottom: 10px;\n  background: #0f0f16;\n  border: 1px solid var(--hf-border);\n  border-radius: 8px;\n  color: var(--hf-text);\n  padding: 8px 10px;\n}\n\n.community-media-block {\n  margin-bottom: 12px;\n}\n\n.community-media-input {\n  display: none;\n}\n\n.community-media-dropzone {\n  border: 1px dashed var(--hf-border-strong);\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.02);\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  cursor: pointer;\n}\n\n.community-media-dropzone strong {\n  color: var(--hf-text);\n  font-size: 13px;\n}\n\n.community-media-dropzone span,\n.community-media-dropzone small {\n  color: var(--hf-text-secondary);\n  font-size: 12px;\n}\n\n.community-media-dropzone.drag-active {\n  border-color: #6ca0eb;\n  background: rgba(108, 160, 235, 0.09);\n}\n\n.community-media-dropzone.uploading {\n  opacity: 0.6;\n}\n\n.community-media-preview {\n  margin-top: 8px;\n  border: 1px solid var(--hf-border);\n  border-radius: 10px;\n  overflow: hidden;\n  background: #0f1018;\n}\n\n.community-media-preview img {\n  width: 100%;\n  display: block;\n}\n\n.community-media-preview.avatar {\n  width: 92px;\n  height: 92px;\n  border-radius: 50%;\n}\n\n.community-media-preview.avatar img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.community-media-preview.banner {\n  max-height: 130px;\n}\n\n.community-media-preview.banner img {\n  height: 130px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.community-not-found {\n  border: 1px solid var(--hf-border);\n  border-radius: 12px;\n  background: var(--hf-surface);\n  padding: 18px;\n  box-shadow: var(--hf-shadow);\n}\n\n.community-not-found h2 {\n  margin: 0 0 8px;\n  font-size: 24px;\n  color: var(--hf-text);\n}\n\n.community-not-found p {\n  margin: 0 0 12px;\n  color: var(--hf-text-secondary);\n}\n\n.hf-right-gutter {\n  display: none;\n}\n\n@media (min-width: 1280px) {\n  .humanfirst-body {\n    padding: 14px 24px 0;\n  }\n\n  .community-shell {\n    display: grid;\n    grid-template-columns: 260px minmax(0, 720px) 320px minmax(0, 1fr);\n    -moz-column-gap: 28px;\n         column-gap: 28px;\n    align-items: start;\n  }\n\n  .community-main-feed {\n    max-width: 720px;\n  }\n\n  .community-info-col {\n    width: 320px;\n  }\n\n  .hf-right-gutter {\n    display: block;\n    min-height: 1px;\n  }\n}\n\n@media (min-width: 1024px) and (max-width: 1279px) {\n  .humanfirst-body {\n    padding: 14px 18px 0;\n  }\n\n  .community-shell {\n    display: grid;\n    grid-template-columns: 260px minmax(0, 1fr) 300px;\n    -moz-column-gap: 24px;\n         column-gap: 24px;\n    align-items: start;\n  }\n\n  .community-main-feed {\n    max-width: 720px;\n  }\n\n  .community-info-col {\n    width: 300px;\n  }\n}\n\n@media (max-width: 1023px) {\n  .humanfirst-body {\n    padding: 12px 12px 0;\n  }\n\n  .community-banner {\n    min-height: 164px;\n  }\n\n  .community-avatar-large {\n    width: 72px;\n    height: 72px;\n    bottom: -36px;\n  }\n\n  .community-header-row {\n    flex-direction: column;\n    align-items: flex-start;\n    padding-top: 44px;\n  }\n\n  .community-header-left {\n    padding-left: 0;\n    width: 100%;\n  }\n\n  .community-header-actions {\n    width: 100%;\n    justify-content: flex-start;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbXVuaXR5L2NvbW11bml0eS1wYWdlL2NvbW11bml0eS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QiwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLG9CQUFvQjtFQUNwQixrQ0FBa0M7RUFDbEMsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQywrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsK0JBQStCO0VBQy9CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrRUFBa0U7SUFDbEUscUJBQWdCO1NBQWhCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsaURBQWlEO0lBQ2pELHFCQUFnQjtTQUFoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLDJCQUEyQjtFQUM3QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tbXVuaXR5L2NvbW11bml0eS1wYWdlL2NvbW11bml0eS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaHVtYW5maXJzdC1ib2R5IHtcbiAgcGFkZGluZzogMTJweCAyMHB4IDA7XG59XG5cbi5oZi1sYXlvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi5jb21tdW5pdHktbWFpbi1jb2wge1xuICBtaW4td2lkdGg6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuXG4uY29tbXVuaXR5LW1haW4tZmVlZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDcyMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5jb21tdW5pdHktaGVhZGVyLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1zdXJmYWNlKTtcbiAgYm94LXNoYWRvdzogdmFyKC0taGYtc2hhZG93KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmNvbW11bml0eS1iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDE4OHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xufVxuXG4uY29tbXVuaXR5LWF2YXRhci1sYXJnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMThweDtcbiAgYm90dG9tOiAtNDJweDtcbiAgd2lkdGg6IDg0cHg7XG4gIGhlaWdodDogODRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDRweCBzb2xpZCAjZjRmNmZmO1xuICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICMxYTIyMzM7XG4gIGNvbG9yOiAjZGJlNmZmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbW11bml0eS1hdmF0YXItbGFyZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jb21tdW5pdHktaGVhZGVyLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTRweDtcbiAgcGFkZGluZzogNTBweCAxOHB4IDE4cHg7XG59XG5cbi5jb21tdW5pdHktaGVhZGVyLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4td2lkdGg6IDA7XG4gIHBhZGRpbmctbGVmdDogOTZweDtcbn1cblxuLmNvbW11bml0eS10aXRsZS1ibG9jayB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmNvbW11bml0eS10aXRsZS1ibG9jayBoMSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xufVxuXG4uY29tbXVuaXR5LXRpdGxlLWJsb2NrIHAge1xuICBtYXJnaW46IDhweCAwIDA7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLmNvbW11bml0eS1oZWFkZXItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5jb21tdW5pdHktaGVhZGVyLWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlci1zdHJvbmcpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGYtc3VyZmFjZS1zb2Z0KTtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogOHB4IDEzcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tbXVuaXR5LWhlYWRlci1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMWIxYjI4O1xuICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG59XG5cbi5jb21tdW5pdHktaGVhZGVyLWJ0bi5jcmVhdGUge1xuICBib3JkZXItY29sb3I6ICMzOTVmOWY7XG4gIGJhY2tncm91bmQ6ICMxNzMxNWY7XG4gIGNvbG9yOiAjZGNlOGZmO1xufVxuXG4uY29tbXVuaXR5LWhlYWRlci1idG4uY3JlYXRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzFkM2E2ZTtcbn1cblxuLmNvbW11bml0eS1oZWFkZXItYnRuLmpvaW4ge1xuICBib3JkZXItY29sb3I6ICMyZTY3NTg7XG4gIGJhY2tncm91bmQ6ICMxNDNiMzE7XG4gIGNvbG9yOiAjYzFmOGU3O1xufVxuXG4uY29tbXVuaXR5LWhlYWRlci1idG4uam9pbmVkIHtcbiAgYm9yZGVyLWNvbG9yOiAjNTk0ZjJjO1xuICBiYWNrZ3JvdW5kOiAjMzEyYzE2O1xuICBjb2xvcjogI2VmZTBhYTtcbn1cblxuLmNvbW11bml0eS1oZWFkZXItYnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uY29tbXVuaXR5LWNyZWF0b3ItcGlsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlci1zdHJvbmcpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgcGFkZGluZzogN3B4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbn1cblxuLmNvbW11bml0eS1mZWVkLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1zdXJmYWNlKTtcbiAgYm94LXNoYWRvdzogdmFyKC0taGYtc2hhZG93KTtcbiAgcGFkZGluZzogMTRweDtcbn1cblxuLmNvbW11bml0eS1mZWVkLWNhcmQgaDMge1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbn1cblxuLmNvbW11bml0eS1pbmZvLWNvbCB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmNvbW11bml0eS1pbmZvLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1zdXJmYWNlKTtcbiAgYm94LXNoYWRvdzogdmFyKC0taGYtc2hhZG93KTtcbiAgcGFkZGluZzogMTRweDtcbn1cblxuLmNvbW11bml0eS1pbmZvLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1tdXRlZCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNvbW11bml0eS1pbmZvLWNhcmQgaDMge1xuICBtYXJnaW46IDhweCAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbn1cblxuLmNvbW11bml0eS1pbmZvLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5jb21tdW5pdHktcmVhZC10b2dnbGUge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjOTNjZWZiO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb21tdW5pdHktcmVhZC10b2dnbGU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmNvbW11bml0eS1tZXRhIHtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlcik7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uY29tbXVuaXR5LW1ldGEtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNvbW11bml0eS1tZXRhLXJvdyBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtbXV0ZWQpO1xufVxuXG4uY29tbXVuaXR5LW1ldGEtcm93IHN0cm9uZyB7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5jb21tdW5pdHktZ3VpZGUtbGluayB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXItc3Ryb25nKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbW11bml0eS1ndWlkZS1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzE4MTgyNDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xufVxuXG4uY29tbXVuaXR5LWFkbWluIHtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xufVxuXG4uY29tbXVuaXR5LWFkbWluIGg0IHtcbiAgbWFyZ2luOiAwIDAgOHB4O1xuICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbW11bml0eS1hZG1pbi1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyLXN0cm9uZyk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGYtc3VyZmFjZS1zb2Z0KTtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5jb21tdW5pdHktYWRtaW4tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzFiMWIyODtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xufVxuXG4uY29tbXVuaXR5LWFkbWluLWJ0bi5kZWxldGUge1xuICBib3JkZXItY29sb3I6ICM1YjI1MzY7XG4gIGNvbG9yOiAjZmY5YmIyO1xufVxuXG4uY29tbXVuaXR5LWFkbWluLWJ0bi5kZWxldGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2IxNzIzO1xuICBjb2xvcjogI2ZmYzdkNTtcbn1cblxuLmNvbW11bml0eS1hZG1pbi1idG4uc2F2ZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jb21tdW5pdHktYWRtaW4tYnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uY29tbXVuaXR5LWVkaXQge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5jb21tdW5pdHktZWRpdCBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNvbW11bml0eS1lZGl0IHRleHRhcmVhLFxuLmNvbW11bml0eS1lZGl0IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwZjBmMTY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbn1cblxuLmNvbW11bml0eS1tZWRpYS1ibG9jayB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5jb21tdW5pdHktbWVkaWEtaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29tbXVuaXR5LW1lZGlhLWRyb3B6b25lIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWhmLWJvcmRlci1zdHJvbmcpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpO1xuICBwYWRkaW5nOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tbXVuaXR5LW1lZGlhLWRyb3B6b25lIHN0cm9uZyB7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY29tbXVuaXR5LW1lZGlhLWRyb3B6b25lIHNwYW4sXG4uY29tbXVuaXR5LW1lZGlhLWRyb3B6b25lIHNtYWxsIHtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29tbXVuaXR5LW1lZGlhLWRyb3B6b25lLmRyYWctYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjNmNhMGViO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgMTYwLCAyMzUsIDAuMDkpO1xufVxuXG4uY29tbXVuaXR5LW1lZGlhLWRyb3B6b25lLnVwbG9hZGluZyB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLmNvbW11bml0eS1tZWRpYS1wcmV2aWV3IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjMGYxMDE4O1xufVxuXG4uY29tbXVuaXR5LW1lZGlhLXByZXZpZXcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29tbXVuaXR5LW1lZGlhLXByZXZpZXcuYXZhdGFyIHtcbiAgd2lkdGg6IDkycHg7XG4gIGhlaWdodDogOTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY29tbXVuaXR5LW1lZGlhLXByZXZpZXcuYXZhdGFyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY29tbXVuaXR5LW1lZGlhLXByZXZpZXcuYmFubmVyIHtcbiAgbWF4LWhlaWdodDogMTMwcHg7XG59XG5cbi5jb21tdW5pdHktbWVkaWEtcHJldmlldy5iYW5uZXIgaW1nIHtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jb21tdW5pdHktbm90LWZvdW5kIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGYtc3VyZmFjZSk7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWhmLXNoYWRvdyk7XG59XG5cbi5jb21tdW5pdHktbm90LWZvdW5kIGgyIHtcbiAgbWFyZ2luOiAwIDAgOHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbn1cblxuLmNvbW11bml0eS1ub3QtZm91bmQgcCB7XG4gIG1hcmdpbjogMCAwIDEycHg7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5oZi1yaWdodC1ndXR0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gIC5odW1hbmZpcnN0LWJvZHkge1xuICAgIHBhZGRpbmc6IDE0cHggMjRweCAwO1xuICB9XG5cbiAgLmNvbW11bml0eS1zaGVsbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI2MHB4IG1pbm1heCgwLCA3MjBweCkgMzIwcHggbWlubWF4KDAsIDFmcik7XG4gICAgY29sdW1uLWdhcDogMjhweDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIH1cblxuICAuY29tbXVuaXR5LW1haW4tZmVlZCB7XG4gICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgfVxuXG4gIC5jb21tdW5pdHktaW5mby1jb2wge1xuICAgIHdpZHRoOiAzMjBweDtcbiAgfVxuXG4gIC5oZi1yaWdodC1ndXR0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gIC5odW1hbmZpcnN0LWJvZHkge1xuICAgIHBhZGRpbmc6IDE0cHggMThweCAwO1xuICB9XG5cbiAgLmNvbW11bml0eS1zaGVsbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI2MHB4IG1pbm1heCgwLCAxZnIpIDMwMHB4O1xuICAgIGNvbHVtbi1nYXA6IDI0cHg7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICB9XG5cbiAgLmNvbW11bml0eS1tYWluLWZlZWQge1xuICAgIG1heC13aWR0aDogNzIwcHg7XG4gIH1cblxuICAuY29tbXVuaXR5LWluZm8tY29sIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAuaHVtYW5maXJzdC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxMnB4IDEycHggMDtcbiAgfVxuXG4gIC5jb21tdW5pdHktYmFubmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxNjRweDtcbiAgfVxuXG4gIC5jb21tdW5pdHktYXZhdGFyLWxhcmdlIHtcbiAgICB3aWR0aDogNzJweDtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgYm90dG9tOiAtMzZweDtcbiAgfVxuXG4gIC5jb21tdW5pdHktaGVhZGVyLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nLXRvcDogNDRweDtcbiAgfVxuXG4gIC5jb21tdW5pdHktaGVhZGVyLWxlZnQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb21tdW5pdHktaGVhZGVyLWFjdGlvbnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/community/community-page/community-page.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/community/community-page/community-page.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CommunityPageComponent */

  /***/
  function srcAppCommunityCommunityPageCommunityPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunityPageComponent", function () {
      return CommunityPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _community_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../community.service */
    "./src/app/community/community.service.ts");
    /* harmony import */


    var _shared_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/post.service */
    "./src/app/shared/post.service.ts");
    /* harmony import */


    var _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../auth/shared/auth.service */
    "./src/app/auth/shared/auth.service.ts");
    /* harmony import */


    var _shared_video_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/video-upload.service */
    "./src/app/shared/video-upload.service.ts");
    /* harmony import */


    var _shared_post_sort_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/post-sort.util */
    "./src/app/shared/post-sort.util.ts");

    var CommunityPageComponent = /*#__PURE__*/function () {
      function CommunityPageComponent(route, router, toastr, authService, communityService, postService, videoUploadService) {
        _classCallCheck(this, CommunityPageComponent);

        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.authService = authService;
        this.communityService = communityService;
        this.postService = postService;
        this.videoUploadService = videoUploadService;
        this.communityDetail = null;
        this.community = null;
        this.posts = [];
        this.slug = '';
        this.loading = true;
        this.postsLoading = true;
        this.notFound = false;
        this.isLoggedIn = false;
        this.joinInProgress = false;
        this.editMode = false;
        this.saveInProgress = false;
        this.deletingCommunity = false;
        this.descriptionExpanded = false;
        this.selectedDomain = 'all';
        this.sidebarReloadToken = 0;
        this.avatarPreviewUrl = null;
        this.bannerPreviewUrl = null;
        this.avatarUploadFileName = '';
        this.bannerUploadFileName = '';
        this.isUploadingAvatar = false;
        this.isUploadingBanner = false;
        this.isAvatarDragActive = false;
        this.isBannerDragActive = false;
        this.acceptedCommunityImageTypes = '.jpg,.jpeg,.png,.webp,.gif';
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          avatarImageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          bannerImageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.descriptionPreviewLimit = 220;
        this.maxCommunityImageBytes = 8 * 1024 * 1024;
      }

      _createClass(CommunityPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.authService.loggedIn.subscribe(function (loggedIn) {
            _this9.isLoggedIn = loggedIn;
          });
          this.isLoggedIn = this.authService.isLoggedIn();
          this.routeSubscription = this.route.paramMap.subscribe(function (params) {
            var slug = params.get('slug') || '';

            if (!slug.trim()) {
              _this9.router.navigateByUrl('/communities');

              return;
            }

            _this9.slug = slug;
            _this9.editMode = false;
            _this9.descriptionExpanded = false;

            _this9.resetMediaEditState();

            _this9.loadCommunityAndPosts();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _a;

          (_a = this.routeSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        }
      }, {
        key: "onSidebarDomainSelected",
        value: function onSidebarDomainSelected(domain) {
          this.navigateToHomeDomain(domain);
        }
      }, {
        key: "goToTopicArchive",
        value: function goToTopicArchive() {
          this.router.navigateByUrl('/topics/archive');
        }
      }, {
        key: "goToCommunityDirectory",
        value: function goToCommunityDirectory() {
          this.router.navigateByUrl('/communities');
        }
      }, {
        key: "goToCreatePost",
        value: function goToCreatePost() {
          var _a;

          if (!this.isLoggedIn) {
            this.router.navigateByUrl('/login');
            return;
          }

          var communityId = (_a = this.community) === null || _a === void 0 ? void 0 : _a.id;

          if (!communityId) {
            this.router.navigateByUrl('/create');
            return;
          }

          this.router.navigate(['/create'], {
            queryParams: {
              communityId: communityId
            }
          });
        }
      }, {
        key: "toggleEditMode",
        value: function toggleEditMode() {
          var _a;

          if (!this.community || !((_a = this.communityDetail) === null || _a === void 0 ? void 0 : _a.canEdit) || this.deletingCommunity) {
            return;
          }

          this.editMode = !this.editMode;

          if (this.editMode) {
            this.editForm.patchValue({
              description: this.community.description || '',
              avatarImageUrl: this.community.avatarImageUrl || '',
              bannerImageUrl: this.community.bannerImageUrl || ''
            });
            this.avatarPreviewUrl = this.community.avatarImageUrl || null;
            this.bannerPreviewUrl = this.community.bannerImageUrl || null;
            return;
          }

          this.resetMediaEditState();
        }
      }, {
        key: "saveCommunityChanges",
        value: function saveCommunityChanges() {
          var _this10 = this;

          var _a, _b, _c, _d;

          if (!((_a = this.communityDetail) === null || _a === void 0 ? void 0 : _a.canEdit) || !this.community || this.deletingCommunity || this.isUploadingAnyCommunityImage()) {
            return;
          }

          this.saveInProgress = true;
          this.communityService.updateCommunity(this.slug, {
            description: ((_b = this.editForm.get('description')) === null || _b === void 0 ? void 0 : _b.value) || '',
            avatarImageUrl: ((_c = this.editForm.get('avatarImageUrl')) === null || _c === void 0 ? void 0 : _c.value) || '',
            bannerImageUrl: ((_d = this.editForm.get('bannerImageUrl')) === null || _d === void 0 ? void 0 : _d.value) || ''
          }).subscribe({
            next: function next(updatedCommunity) {
              _this10.community = updatedCommunity;
              _this10.communityDetail = Object.assign(Object.assign({}, _this10.communityDetail), {
                community: updatedCommunity
              });
              _this10.editMode = false;
              _this10.saveInProgress = false;

              _this10.resetMediaEditState();

              _this10.sidebarReloadToken++;

              _this10.toastr.success('Community updated');
            },
            error: function error(_error4) {
              var _a;

              _this10.saveInProgress = false;

              _this10.toastr.error(((_a = _error4 === null || _error4 === void 0 ? void 0 : _error4.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to update community');
            }
          });
        }
      }, {
        key: "deleteCommunity",
        value: function deleteCommunity() {
          var _this11 = this;

          var _a;

          if (!((_a = this.communityDetail) === null || _a === void 0 ? void 0 : _a.canEdit) || !this.community || this.deletingCommunity) {
            return;
          }

          var communityName = this.community.name;
          var typedName = window.prompt("Type \"".concat(communityName, "\" to confirm community deletion."));

          if (typedName === null) {
            return;
          }

          if (typedName.trim() !== communityName) {
            this.toastr.error('Community name does not match. Delete cancelled.');
            return;
          }

          this.deletingCommunity = true;
          this.communityService.deleteCommunity(this.slug).subscribe({
            next: function next() {
              _this11.toastr.success('Community deleted');

              _this11.router.navigateByUrl('/communities');
            },
            error: function error(_error5) {
              var _a;

              _this11.deletingCommunity = false;

              _this11.toastr.error(((_a = _error5 === null || _error5 === void 0 ? void 0 : _error5.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to delete community');
            }
          });
        }
      }, {
        key: "joinCommunity",
        value: function joinCommunity() {
          var _this12 = this;

          if (!this.isLoggedIn) {
            this.router.navigateByUrl('/login');
            return;
          }

          if (!this.slug || this.joinInProgress || this.deletingCommunity) {
            return;
          }

          this.joinInProgress = true;
          this.communityService.joinCommunity(this.slug).subscribe({
            next: function next(detail) {
              _this12.communityDetail = detail;
              _this12.community = detail.community;
              _this12.joinInProgress = false;

              _this12.toastr.success('Joined community');
            },
            error: function error(_error6) {
              var _a;

              _this12.joinInProgress = false;

              _this12.toastr.error(((_a = _error6 === null || _error6 === void 0 ? void 0 : _error6.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to join community');
            }
          });
        }
      }, {
        key: "leaveCommunity",
        value: function leaveCommunity() {
          var _this13 = this;

          var _a, _b;

          if (!this.isLoggedIn || !((_a = this.communityDetail) === null || _a === void 0 ? void 0 : _a.member) || ((_b = this.communityDetail) === null || _b === void 0 ? void 0 : _b.creator)) {
            return;
          }

          if (!this.slug || this.joinInProgress || this.deletingCommunity) {
            return;
          }

          this.joinInProgress = true;
          this.communityService.leaveCommunity(this.slug).subscribe({
            next: function next(detail) {
              _this13.communityDetail = detail;
              _this13.community = detail.community;
              _this13.joinInProgress = false;

              _this13.toastr.success('Left community');
            },
            error: function error(_error7) {
              var _a;

              _this13.joinInProgress = false;

              _this13.toastr.error(((_a = _error7 === null || _error7 === void 0 ? void 0 : _error7.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to leave community');
            }
          });
        }
      }, {
        key: "toggleDescription",
        value: function toggleDescription() {
          this.descriptionExpanded = !this.descriptionExpanded;
        }
      }, {
        key: "shouldShowDescriptionToggle",
        value: function shouldShowDescriptionToggle() {
          return this.getCommunityDescription().length > this.descriptionPreviewLimit;
        }
      }, {
        key: "getDisplayedDescription",
        value: function getDisplayedDescription() {
          var description = this.getCommunityDescription();

          if (this.descriptionExpanded || description.length <= this.descriptionPreviewLimit) {
            return description;
          }

          return "".concat(description.slice(0, this.descriptionPreviewLimit).trim(), "...");
        }
      }, {
        key: "getCommunityCreatedYearMonth",
        value: function getCommunityCreatedYearMonth() {
          var _a;

          var timestamp = this.normalizeApiTimestamp((_a = this.community) === null || _a === void 0 ? void 0 : _a.createdAt);

          if (timestamp === null) {
            return 'Unknown';
          }

          var date = new Date(timestamp);
          return "".concat(date.getUTCFullYear(), "-").concat(date.getUTCMonth() + 1);
        }
      }, {
        key: "getCommunityAvatarLabel",
        value: function getCommunityAvatarLabel() {
          var _a;

          var name = ((_a = this.community) === null || _a === void 0 ? void 0 : _a.name) || '';
          return name.trim().charAt(0).toUpperCase() || 'C';
        }
      }, {
        key: "getCommunityTagline",
        value: function getCommunityTagline() {
          var description = this.getCommunityDescription();

          if (description.length <= 110) {
            return description;
          }

          return "".concat(description.slice(0, 110).trim(), "...");
        }
      }, {
        key: "getBannerBackground",
        value: function getBannerBackground(currentCommunity) {
          if (currentCommunity === null || currentCommunity === void 0 ? void 0 : currentCommunity.bannerImageUrl) {
            return "linear-gradient(rgba(11,11,15,0.58), rgba(11,11,15,0.82)), url(".concat(currentCommunity.bannerImageUrl, ")");
          }

          return 'linear-gradient(120deg, #162033 0%, #182337 45%, #141726 100%)';
        }
      }, {
        key: "onAvatarDropZoneClick",
        value: function onAvatarDropZoneClick(fileInput) {
          fileInput.click();
        }
      }, {
        key: "onBannerDropZoneClick",
        value: function onBannerDropZoneClick(fileInput) {
          fileInput.click();
        }
      }, {
        key: "onAvatarFileSelected",
        value: function onAvatarFileSelected(event) {
          var input = event.target;
          this.handleCommunityImageSelection(input.files, 'avatar');
          input.value = '';
        }
      }, {
        key: "onBannerFileSelected",
        value: function onBannerFileSelected(event) {
          var input = event.target;
          this.handleCommunityImageSelection(input.files, 'banner');
          input.value = '';
        }
      }, {
        key: "onAvatarDragOver",
        value: function onAvatarDragOver(event) {
          event.preventDefault();
          event.stopPropagation();
          this.isAvatarDragActive = true;
        }
      }, {
        key: "onAvatarDragLeave",
        value: function onAvatarDragLeave(event) {
          event.preventDefault();
          event.stopPropagation();
          this.isAvatarDragActive = false;
        }
      }, {
        key: "onAvatarDrop",
        value: function onAvatarDrop(event) {
          var _a;

          event.preventDefault();
          event.stopPropagation();
          this.isAvatarDragActive = false;
          this.handleCommunityImageSelection(((_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.files) || null, 'avatar');
        }
      }, {
        key: "onBannerDragOver",
        value: function onBannerDragOver(event) {
          event.preventDefault();
          event.stopPropagation();
          this.isBannerDragActive = true;
        }
      }, {
        key: "onBannerDragLeave",
        value: function onBannerDragLeave(event) {
          event.preventDefault();
          event.stopPropagation();
          this.isBannerDragActive = false;
        }
      }, {
        key: "onBannerDrop",
        value: function onBannerDrop(event) {
          var _a;

          event.preventDefault();
          event.stopPropagation();
          this.isBannerDragActive = false;
          this.handleCommunityImageSelection(((_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.files) || null, 'banner');
        }
      }, {
        key: "handleCommunityImageSelection",
        value: function handleCommunityImageSelection(files, target) {
          if (!files || files.length === 0) {
            return;
          }

          if (files.length > 1) {
            this.toastr.info('Only one image can be uploaded at a time. Using the most recent file.');
          }

          var file = files.item(files.length - 1);

          if (!file) {
            return;
          }

          var validationError = this.validateCommunityImage(file);

          if (validationError) {
            this.toastr.error(validationError);
            return;
          }

          this.uploadCommunityImage(file, target);
        }
      }, {
        key: "validateCommunityImage",
        value: function validateCommunityImage(file) {
          if (!this.isSupportedCommunityImage(file)) {
            return 'Unsupported image type. Use jpg, jpeg, png, webp, or gif.';
          }

          if (file.size > this.maxCommunityImageBytes) {
            return 'Image is too large. Max size is 8 MB.';
          }

          return null;
        }
      }, {
        key: "isSupportedCommunityImage",
        value: function isSupportedCommunityImage(file) {
          var fileType = (file.type || '').toLowerCase();

          if (['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'].includes(fileType)) {
            return true;
          }

          return /\.(jpe?g|png|webp|gif)$/i.test(file.name || '');
        }
      }, {
        key: "uploadCommunityImage",
        value: function uploadCommunityImage(file, target) {
          var _this14 = this;

          this.setImageUploadState(target, true);
          this.videoUploadService.createMediaUploadUrl(file.name, file.type, 'IMAGE').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (uploadData) {
            return _this14.videoUploadService.uploadFile(uploadData.uploadUrl, file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
              var objectKey = uploadData.objectKey;

              if (target === 'avatar') {
                _this14.editForm.patchValue({
                  avatarImageUrl: objectKey
                });

                _this14.avatarPreviewUrl = URL.createObjectURL(file);
                _this14.avatarUploadFileName = file.name;
              } else {
                _this14.editForm.patchValue({
                  bannerImageUrl: objectKey
                });

                _this14.bannerPreviewUrl = URL.createObjectURL(file);
                _this14.bannerUploadFileName = file.name;
              }

              _this14.toastr.success("".concat(target === 'avatar' ? 'Avatar' : 'Banner', " uploaded"));
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            return _this14.setImageUploadState(target, false);
          })).subscribe({
            error: function error(_error8) {
              _this14.toastr.error(_this14.extractUploadErrorMessage(_error8));
            }
          });
        }
      }, {
        key: "setImageUploadState",
        value: function setImageUploadState(target, uploading) {
          if (target === 'avatar') {
            this.isUploadingAvatar = uploading;
            return;
          }

          this.isUploadingBanner = uploading;
        }
      }, {
        key: "extractUploadErrorMessage",
        value: function extractUploadErrorMessage(error) {
          var _a;

          var backendMessage = ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) || (error === null || error === void 0 ? void 0 : error.message);

          if (backendMessage) {
            return backendMessage;
          }

          if ((error === null || error === void 0 ? void 0 : error.status) === 0) {
            return 'Upload failed. Check network/S3 CORS configuration and try again.';
          }

          return 'Image upload failed';
        }
      }, {
        key: "isUploadingAnyCommunityImage",
        value: function isUploadingAnyCommunityImage() {
          return this.isUploadingAvatar || this.isUploadingBanner;
        }
      }, {
        key: "resetMediaEditState",
        value: function resetMediaEditState() {
          this.avatarPreviewUrl = null;
          this.bannerPreviewUrl = null;
          this.avatarUploadFileName = '';
          this.bannerUploadFileName = '';
          this.isAvatarDragActive = false;
          this.isBannerDragActive = false;
          this.isUploadingAvatar = false;
          this.isUploadingBanner = false;
        }
      }, {
        key: "navigateToHomeDomain",
        value: function navigateToHomeDomain(domain) {
          this.selectedDomain = domain;

          if (domain === 'all') {
            this.router.navigate(['/']);
            return;
          }

          this.router.navigate(['/'], {
            queryParams: {
              domain: domain
            }
          });
        }
      }, {
        key: "loadCommunityAndPosts",
        value: function loadCommunityAndPosts() {
          var _this15 = this;

          this.loading = true;
          this.postsLoading = true;
          this.notFound = false;
          this.posts = [];
          this.communityService.getCommunity(this.slug).subscribe({
            next: function next(detail) {
              _this15.communityDetail = detail;
              _this15.community = detail.community;
              _this15.descriptionExpanded = false;
              _this15.loading = false;

              _this15.loadCommunityPosts();
            },
            error: function error(_error9) {
              var _a;

              _this15.loading = false;
              _this15.postsLoading = false;
              _this15.notFound = _error9.status === 404;

              if (!_this15.notFound) {
                _this15.toastr.error(((_a = _error9 === null || _error9 === void 0 ? void 0 : _error9.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to load community');
              }
            }
          });
        }
      }, {
        key: "loadCommunityPosts",
        value: function loadCommunityPosts() {
          var _this16 = this;

          this.postService.getPostsByCommunity(this.slug).subscribe({
            next: function next(posts) {
              _this16.posts = Object(_shared_post_sort_util__WEBPACK_IMPORTED_MODULE_10__["sortPostsByNewest"])(posts);
              _this16.postsLoading = false;
            },
            error: function error(_error10) {
              var _a;

              _this16.postsLoading = false;

              if (_error10.status === 404) {
                _this16.notFound = true;
                return;
              }

              _this16.toastr.error(((_a = _error10 === null || _error10 === void 0 ? void 0 : _error10.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to load posts');
            }
          });
        }
      }, {
        key: "normalizeApiTimestamp",
        value: function normalizeApiTimestamp(value) {
          if (value === null || value === undefined || value === '') {
            return null;
          }

          if (typeof value === 'number') {
            if (!Number.isFinite(value)) {
              return null;
            }

            return value < 1e12 ? Math.round(value * 1000) : value;
          }

          var trimmed = value.trim();

          if (!trimmed) {
            return null;
          }

          if (/^-?\d+(?:\.\d+)?$/.test(trimmed)) {
            var parsedNumeric = Number(trimmed);

            if (!Number.isFinite(parsedNumeric)) {
              return null;
            }

            return parsedNumeric < 1e12 ? Math.round(parsedNumeric * 1000) : parsedNumeric;
          }

          var parsedDate = Date.parse(trimmed);
          return Number.isNaN(parsedDate) ? null : parsedDate;
        }
      }, {
        key: "getCommunityDescription",
        value: function getCommunityDescription() {
          var _a, _b;

          var description = (_b = (_a = this.community) === null || _a === void 0 ? void 0 : _a.description) === null || _b === void 0 ? void 0 : _b.trim();
          return description && description.length > 0 ? description : 'No community description yet.';
        }
      }]);

      return CommunityPageComponent;
    }();

    CommunityPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
      }, {
        type: _community_service__WEBPACK_IMPORTED_MODULE_6__["CommunityService"]
      }, {
        type: _shared_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"]
      }, {
        type: _shared_video_upload_service__WEBPACK_IMPORTED_MODULE_9__["VideoUploadService"]
      }];
    };

    CommunityPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-community-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./community-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/community/community-page/community-page.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./community-page.component.css */
      "./src/app/community/community-page/community-page.component.css"))["default"]]
    })], CommunityPageComponent);
    /***/
  },

  /***/
  "./src/app/community/community.service.ts":
  /*!************************************************!*\
    !*** ./src/app/community/community.service.ts ***!
    \************************************************/

  /*! exports provided: CommunityService */

  /***/
  function srcAppCommunityCommunityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunityService", function () {
      return CommunityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var CommunityService = /*#__PURE__*/function () {
      function CommunityService(http) {
        _classCallCheck(this, CommunityService);

        this.http = http;
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl;
      }

      _createClass(CommunityService, [{
        key: "getAllCommunities",
        value: function getAllCommunities() {
          return this.http.get("".concat(this.apiBaseUrl, "/api/communities"));
        }
      }, {
        key: "getCommunity",
        value: function getCommunity(slug) {
          return this.http.get("".concat(this.apiBaseUrl, "/api/communities/").concat(slug));
        }
      }, {
        key: "createCommunity",
        value: function createCommunity(payload) {
          return this.http.post("".concat(this.apiBaseUrl, "/api/communities"), payload);
        }
      }, {
        key: "updateCommunity",
        value: function updateCommunity(slug, payload) {
          return this.http.put("".concat(this.apiBaseUrl, "/api/communities/").concat(slug), payload);
        }
      }, {
        key: "deleteCommunity",
        value: function deleteCommunity(slug) {
          return this.http["delete"]("".concat(this.apiBaseUrl, "/api/communities/").concat(slug));
        }
      }, {
        key: "joinCommunity",
        value: function joinCommunity(slug) {
          return this.http.post("".concat(this.apiBaseUrl, "/api/communities/").concat(slug, "/join"), {});
        }
      }, {
        key: "leaveCommunity",
        value: function leaveCommunity(slug) {
          return this.http["delete"]("".concat(this.apiBaseUrl, "/api/communities/").concat(slug, "/join"));
        }
      }, {
        key: "getMyCommunities",
        value: function getMyCommunities() {
          return this.http.get("".concat(this.apiBaseUrl, "/api/communities/mine"));
        }
      }]);

      return CommunityService;
    }();

    CommunityService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CommunityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommunityService);
    /***/
  },

  /***/
  "./src/app/community/my-communities/my-communities.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/community/my-communities/my-communities.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommunityMyCommunitiesMyCommunitiesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-communities-page {\n  width: 100%;\n  padding: 0 0 16px;\n}\n\n.my-communities-page h2 {\n  margin-bottom: 12px;\n}\n\n.my-community-sections {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 12px;\n}\n\n.my-community-card {\n  border: 1px solid var(--hf-border);\n  border-radius: 12px;\n  background: var(--hf-surface);\n  box-shadow: var(--hf-shadow);\n  padding: 14px;\n}\n\n.my-community-card h3 {\n  margin: 0 0 10px;\n  font-size: 17px;\n}\n\n.my-community-item {\n  display: block;\n  border: 1px solid var(--hf-border);\n  border-radius: 8px;\n  padding: 9px 10px;\n  margin-bottom: 8px;\n  color: var(--hf-text-secondary);\n  text-decoration: none;\n}\n\n.my-community-item:hover {\n  border-color: var(--hf-border-strong);\n  color: var(--hf-text);\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbXVuaXR5L215LWNvbW11bml0aWVzL215LWNvbW11bml0aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bml0eS9teS1jb21tdW5pdGllcy9teS1jb21tdW5pdGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWNvbW11bml0aWVzLXBhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAwIDE2cHg7XG59XG5cbi5teS1jb21tdW5pdGllcy1wYWdlIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLm15LWNvbW11bml0eS1zZWN0aW9ucyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpO1xuICBnYXA6IDEycHg7XG59XG5cbi5teS1jb21tdW5pdHktY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhmLXN1cmZhY2UpO1xuICBib3gtc2hhZG93OiB2YXIoLS1oZi1zaGFkb3cpO1xuICBwYWRkaW5nOiAxNHB4O1xufVxuXG4ubXktY29tbXVuaXR5LWNhcmQgaDMge1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5teS1jb21tdW5pdHktaXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDlweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm15LWNvbW11bml0eS1pdGVtOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oZi1ib3JkZXItc3Ryb25nKTtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/community/my-communities/my-communities.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/community/my-communities/my-communities.component.ts ***!
    \**********************************************************************/

  /*! exports provided: MyCommunitiesComponent */

  /***/
  function srcAppCommunityMyCommunitiesMyCommunitiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCommunitiesComponent", function () {
      return MyCommunitiesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _community_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../community.service */
    "./src/app/community/community.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var MyCommunitiesComponent = /*#__PURE__*/function () {
      function MyCommunitiesComponent(communityService, toastr, router) {
        _classCallCheck(this, MyCommunitiesComponent);

        this.communityService = communityService;
        this.toastr = toastr;
        this.router = router;
        this.myCommunities = {
          createdCommunities: [],
          joinedCommunities: []
        };
        this.loading = true;
        this.selectedDomain = 'all';
      }

      _createClass(MyCommunitiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.communityService.getMyCommunities().subscribe({
            next: function next(response) {
              _this17.myCommunities = response || {
                createdCommunities: [],
                joinedCommunities: []
              };
              _this17.loading = false;
            },
            error: function error() {
              _this17.loading = false;

              _this17.toastr.error('Failed to load your communities');
            }
          });
        }
      }, {
        key: "onSidebarDomainSelected",
        value: function onSidebarDomainSelected(domain) {
          this.navigateToHomeDomain(domain);
        }
      }, {
        key: "navigateToHomeDomain",
        value: function navigateToHomeDomain(domain) {
          this.selectedDomain = domain;

          if (domain === 'all') {
            this.router.navigate(['/']);
            return;
          }

          this.router.navigate(['/'], {
            queryParams: {
              domain: domain
            }
          });
        }
      }]);

      return MyCommunitiesComponent;
    }();

    MyCommunitiesComponent.ctorParameters = function () {
      return [{
        type: _community_service__WEBPACK_IMPORTED_MODULE_3__["CommunityService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MyCommunitiesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-communities',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-communities.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/community/my-communities/my-communities.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-communities.component.css */
      "./src/app/community/my-communities/my-communities.component.css"))["default"]]
    })], MyCommunitiesComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hf-navbar {\n    border-bottom: 1px solid var(--hf-border);\n    background-color: rgba(10, 10, 10, 0.96);\n    -webkit-backdrop-filter: blur(8px);\n            backdrop-filter: blur(8px);\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n\n.hf-navbar-inner {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 16px;\n}\n\n.reddit-text {\n    font-weight: 800;\n    font-size: 40px;\n    line-height: 1;\n    letter-spacing: 0.01em;\n    background: linear-gradient(90deg, #86DECF 0%, #93CEFB 45%, #BCB6FB 100%);\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    color: transparent;\n}\n\n.logo {\n    text-decoration: none;\n    display: inline-flex;\n    align-items: center;\n    padding-left: 6px;\n}\n\n.hf-nav-actions {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin-left: auto;\n}\n\n.auth-links {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.create-link {\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    height: 36px;\n    padding: 0 14px;\n    border-radius: 999px;\n    border: 1px solid var(--hf-border-strong);\n    background-color: var(--hf-surface-soft);\n    color: var(--hf-text);\n    font-size: 13px;\n    font-weight: 700;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.secondary-link {\n    background: transparent;\n    color: var(--hf-text-secondary);\n}\n\n.create-link:hover,\n.create-link:focus {\n    color: var(--hf-text);\n    text-decoration: none;\n    background-color: #1a1a24;\n}\n\n.create-link:focus,\n.userdetails:focus,\n.hf-auth-link:focus {\n    outline: none;\n    box-shadow: var(--hf-focus-ring);\n}\n\n.hf-auth-link {\n    border-radius: 999px;\n    border: 1px solid var(--hf-border-strong);\n    height: 36px;\n    line-height: 34px;\n    min-width: 88px;\n}\n\n.hf-auth-link.login {\n    background-color: transparent;\n    color: var(--hf-text-secondary);\n}\n\n.hf-auth-link.sign-up {\n    background-color: var(--hf-surface-soft);\n    color: var(--hf-text);\n}\n\n.userdetails {\n    background-color: transparent;\n    border: 1px solid transparent;\n    border-radius: 999px;\n    color: var(--hf-text-secondary);\n    text-align: center;\n    text-decoration: none;\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 24px;\n    text-transform: uppercase;\n    padding: 5px 12px;\n    opacity: 1;\n}\n\n.userdetails:hover {\n    border-color: var(--hf-border-strong);\n    background-color: #171722;\n}\n\n.dropdown-item {\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 18px;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.account-icon {\n    border-radius: 999px;\n    margin-right: 6px;\n    max-height: 24px;\n    max-width: 24px;\n}\n\n@media (max-width: 991px) {\n    .reddit-text {\n        font-size: 32px;\n    }\n}\n\n@media (max-width: 767px) {\n    .reddit-text {\n        font-size: 30px;\n    }\n\n    .create-link {\n        padding: 0 10px;\n    }\n\n    .create-link span {\n        display: none;\n    }\n\n    .hf-auth-link {\n        min-width: auto;\n        padding: 0 10px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUNBQXlDO0lBQ3pDLHdDQUF3QztJQUN4QyxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHlFQUF5RTtJQUN6RSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFlBQVk7SUFDWixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHlDQUF5QztJQUN6Qyx3Q0FBd0M7SUFDeEMscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsK0JBQStCO0FBQ25DOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhmLW5hdmJhciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgMTAsIDEwLCAwLjk2KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5oZi1uYXZiYXItaW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxNnB4O1xufVxuXG4ucmVkZGl0LXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjODZERUNGIDAlLCAjOTNDRUZCIDQ1JSwgI0JDQjZGQiAxMDAlKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmxvZ28ge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xufVxuXG4uaGYtbmF2LWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5hdXRoLWxpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi5jcmVhdGUtbGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgcGFkZGluZzogMCAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlci1zdHJvbmcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLXN1cmZhY2Utc29mdCk7XG4gICAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWNvbmRhcnktbGluayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLmNyZWF0ZS1saW5rOmhvdmVyLFxuLmNyZWF0ZS1saW5rOmZvY3VzIHtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMjQ7XG59XG5cbi5jcmVhdGUtbGluazpmb2N1cyxcbi51c2VyZGV0YWlsczpmb2N1cyxcbi5oZi1hdXRoLWxpbms6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogdmFyKC0taGYtZm9jdXMtcmluZyk7XG59XG5cbi5oZi1hdXRoLWxpbmsge1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlci1zdHJvbmcpO1xuICAgIGhlaWdodDogMzZweDtcbiAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICBtaW4td2lkdGg6IDg4cHg7XG59XG5cbi5oZi1hdXRoLWxpbmsubG9naW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5oZi1hdXRoLWxpbmsuc2lnbi11cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtc3VyZmFjZS1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG59XG5cbi51c2VyZGV0YWlscyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnVzZXJkZXRhaWxzOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhmLWJvcmRlci1zdHJvbmcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MjI7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmFjY291bnQtaWNvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgbWF4LWhlaWdodDogMjRweDtcbiAgICBtYXgtd2lkdGg6IDI0cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC5yZWRkaXQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5yZWRkaXQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cbiAgICAuY3JlYXRlLWxpbmsge1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgfVxuXG4gICAgLmNyZWF0ZS1saW5rIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5oZi1hdXRoLWxpbmsge1xuICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/shared/auth.service */
    "./src/app/auth/shared/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(authService, router) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.router = router;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"];
        this.faUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUsers"];
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.authService.loggedIn.subscribe(function (data) {
            return _this18.isLoggedIn = data;
          });
          this.authService.username.subscribe(function (data) {
            return _this18.username = data;
          });
          this.isLoggedIn = this.authService.isLoggedIn();
          this.username = this.authService.getUserName();
        }
      }, {
        key: "goToUserProfile",
        value: function goToUserProfile() {
          this.router.navigateByUrl('/user-profile/' + this.username);
        }
      }, {
        key: "goToMyPosts",
        value: function goToMyPosts() {
          this.router.navigateByUrl('/my-posts');
        }
      }, {
        key: "goToMyLikes",
        value: function goToMyLikes() {
          this.router.navigateByUrl('/my-likes');
        }
      }, {
        key: "goToMyComments",
        value: function goToMyComments() {
          this.router.navigateByUrl('/my-comments');
        }
      }, {
        key: "goToMyCommunities",
        value: function goToMyCommunities() {
          this.router.navigateByUrl('/my-communities');
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.isLoggedIn = false;
          this.router.navigateByUrl('');
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".humanfirst-body {\n  padding: 12px 20px 0;\n}\n\n.hf-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.hf-main-col {\n  min-width: 0;\n  padding-bottom: 12px;\n}\n\n.hf-main-feed {\n  width: 100%;\n  max-width: 760px;\n  margin: 0;\n}\n\n.hf-right-gutter {\n  display: none;\n}\n\n@media (min-width: 1024px) {\n  .humanfirst-body {\n    padding: 14px 24px 0;\n  }\n\n  .hf-layout {\n    display: grid;\n    grid-template-columns: 260px minmax(0, 760px) minmax(0, 1fr);\n    -moz-column-gap: 22px;\n         column-gap: 22px;\n    align-items: start;\n  }\n\n  .hf-main-col {\n    width: 100%;\n  }\n\n  .hf-main-feed {\n    max-width: 760px;\n  }\n\n  .hf-right-gutter {\n    display: block;\n    min-height: 1px;\n  }\n}\n\n@media (min-width: 1440px) {\n  .humanfirst-body {\n    padding-right: 34px;\n  }\n}\n\n@media (max-width: 1023px) {\n  .humanfirst-body {\n    padding: 12px 12px 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxxQkFBZ0I7U0FBaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmh1bWFuZmlyc3QtYm9keSB7XG4gIHBhZGRpbmc6IDEycHggMjBweCAwO1xufVxuXG4uaGYtbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uaGYtbWFpbi1jb2wge1xuICBtaW4td2lkdGg6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuXG4uaGYtbWFpbi1mZWVkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNzYwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhmLXJpZ2h0LWd1dHRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmh1bWFuZmlyc3QtYm9keSB7XG4gICAgcGFkZGluZzogMTRweCAyNHB4IDA7XG4gIH1cblxuICAuaGYtbGF5b3V0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjYwcHggbWlubWF4KDAsIDc2MHB4KSBtaW5tYXgoMCwgMWZyKTtcbiAgICBjb2x1bW4tZ2FwOiAyMnB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgfVxuXG4gIC5oZi1tYWluLWNvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuaGYtbWFpbi1mZWVkIHtcbiAgICBtYXgtd2lkdGg6IDc2MHB4O1xuICB9XG5cbiAgLmhmLXJpZ2h0LWd1dHRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLmh1bWFuZmlyc3QtYm9keSB7XG4gICAgcGFkZGluZy1yaWdodDogMzRweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC5odW1hbmZpcnN0LWJvZHkge1xuICAgIHBhZGRpbmc6IDEycHggMTJweCAwO1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/post.service */
    "./src/app/shared/post.service.ts");
    /* harmony import */


    var _subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../subreddit/subreddit.service */
    "./src/app/subreddit/subreddit.service.ts");
    /* harmony import */


    var _shared_post_sort_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/post-sort.util */
    "./src/app/shared/post-sort.util.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(postService, subredditService, toastr, route) {
        _classCallCheck(this, HomeComponent);

        this.postService = postService;
        this.subredditService = subredditService;
        this.toastr = toastr;
        this.route = route;
        this.posts = [];
        this.selectedDomain = 'all';
        this.subredditIdByDomain = new Map();
        this.domainAliases = {
          discussions: ['discussions'],
          'ai-prospects': ['ai prospects', 'ai-prospects']
        };
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var queryDomain = this.normalizeDomainKey(this.route.snapshot.queryParamMap.get('domain'));

          if (queryDomain) {
            this.selectedDomain = queryDomain;
          }

          this.loadDomainMapping();
        }
      }, {
        key: "onSidebarDomainSelected",
        value: function onSidebarDomainSelected(domainKey) {
          this.selectDomain(domainKey);
        }
      }, {
        key: "selectDomain",
        value: function selectDomain(domainKey) {
          if (this.selectedDomain === domainKey) {
            return;
          }

          this.selectedDomain = domainKey;
          this.loadPosts();
        }
      }, {
        key: "loadDomainMapping",
        value: function loadDomainMapping() {
          var _this19 = this;

          this.subredditService.getAllSubreddits().subscribe(function (subreddits) {
            _this19.subredditIdByDomain.clear();

            var subredditIdByName = new Map();
            subreddits.forEach(function (item) {
              if (item.id) {
                subredditIdByName.set(_this19.normalizeName(item.name), item.id);
              }
            });
            Object.entries(_this19.domainAliases).forEach(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  domainKey = _ref2[0],
                  aliases = _ref2[1];

              var mappedId = aliases.map(function (alias) {
                return subredditIdByName.get(_this19.normalizeName(alias));
              }).find(function (value) {
                return !!value;
              });

              if (mappedId) {
                _this19.subredditIdByDomain.set(domainKey, mappedId);
              }
            });

            if (_this19.selectedDomain !== 'all' && !_this19.subredditIdByDomain.has(_this19.selectedDomain)) {
              _this19.selectedDomain = 'all';
            }

            _this19.loadPosts();
          }, function () {
            _this19.toastr.error('Failed to load domain list');

            _this19.loadPosts();
          });
        }
      }, {
        key: "loadPosts",
        value: function loadPosts() {
          var _this20 = this;

          if (this.selectedDomain === 'all') {
            this.postService.getAllPosts().subscribe(function (posts) {
              _this20.posts = Object(_shared_post_sort_util__WEBPACK_IMPORTED_MODULE_6__["sortPostsByNewest"])(posts);
            }, function () {
              _this20.posts = [];

              _this20.toastr.error('Failed to load posts');
            });
            return;
          }

          var subredditId = this.subredditIdByDomain.get(this.selectedDomain);

          if (!subredditId) {
            this.posts = [];
            this.toastr.error('Selected domain is not available');
            return;
          }

          this.postService.getPostsBySubreddit(subredditId).subscribe(function (posts) {
            _this20.posts = Object(_shared_post_sort_util__WEBPACK_IMPORTED_MODULE_6__["sortPostsByNewest"])(posts);
          }, function () {
            _this20.posts = [];

            _this20.toastr.error('Failed to load posts for selected domain');
          });
        }
      }, {
        key: "normalizeDomainKey",
        value: function normalizeDomainKey(value) {
          if (!value) {
            return null;
          }

          var normalized = value.trim().toLowerCase();

          if (normalized === 'all' || Object.keys(this.domainAliases).includes(normalized)) {
            return normalized;
          }

          return null;
        }
      }, {
        key: "normalizeName",
        value: function normalizeName(value) {
          return (value || '').toLowerCase().replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _shared_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]
      }, {
        type: _subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_5__["SubredditService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/post/create-post/create-post.component.css":
  /*!************************************************************!*\
    !*** ./src/app/post/create-post/create-post.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostCreatePostCreatePostComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btnCreatePost,\n.btnCreateSubreddit {\n  margin-top: 5px;\n}\n\n.post-form {\n  margin: 2px;\n}\n\n.comment-notification {\n  margin-top: 5px;\n}\n\n.create-post-main {\n  max-width: 980px;\n  margin: 0 auto;\n}\n\n.create-post-container {\n  margin-top: 10px;\n  border: 1px solid var(--hf-border);\n  margin-bottom: 10px;\n  overflow: hidden;\n  background-color: var(--hf-surface);\n  color: var(--hf-text-secondary);\n  position: relative;\n  border-radius: 10px;\n  box-shadow: var(--hf-shadow);\n  padding: 10px;\n}\n\n.media-upload-block {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.media-input {\n  display: none;\n}\n\n.media-dropzone {\n  border: 1px dashed var(--hf-border-strong);\n  border-radius: 10px;\n  background: #141420;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  cursor: pointer;\n  color: var(--hf-text-secondary);\n}\n\n.media-dropzone strong {\n  color: var(--hf-text);\n}\n\n.media-dropzone.drag-active {\n  border-color: #93cefb;\n  background: #17172a;\n}\n\n.media-dropzone.uploading {\n  opacity: 0.8;\n  pointer-events: none;\n}\n\n.media-dropzone:focus {\n  outline: none;\n  box-shadow: var(--hf-focus-ring);\n}\n\n.attachment-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.clear-attachment {\n  border: 1px solid var(--hf-border-strong);\n  border-radius: 999px;\n  background: transparent;\n  color: var(--hf-text-secondary);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: .5px;\n  text-transform: uppercase;\n  padding: 4px 12px;\n}\n\n.clear-attachment:hover {\n  color: var(--hf-text);\n  background: #1a1a24;\n}\n\n.btnDiscard {\n  border: 1px solid var(--hf-border-strong);\n  border-radius: 999px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .5px;\n  line-height: 24px;\n  text-transform: uppercase;\n  padding: 3px 18px;\n  min-width: 140px;\n  height: 36px;\n  margin-top: 5px;\n  color: var(--hf-text-secondary);\n  background-color: transparent;\n}\n\n.btnDiscard:hover {\n  background-color: #1a1a24;\n  color: var(--hf-text);\n}\n\n.create-post-heading {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 22px;\n  color: var(--hf-text);\n}\n\n.btnCreatePost {\n  background-color: var(--hf-surface-soft);\n  border-color: var(--hf-border-strong);\n  color: var(--hf-text);\n  border: 1px solid;\n  border-radius: 999px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .5px;\n  line-height: 24px;\n  text-transform: uppercase;\n  padding: 3px 18px;\n  min-width: 140px;\n  height: 36px;\n  margin-left: 8px;\n}\n\n.btnCreatePost:hover {\n  background-color: #1b1b28;\n}\n\nsmall {\n  color: var(--hf-text-muted);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9jcmVhdGUtcG9zdC9jcmVhdGUtcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixlQUFlO0VBQ2YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wb3N0L2NyZWF0ZS1wb3N0L2NyZWF0ZS1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuQ3JlYXRlUG9zdCxcbi5idG5DcmVhdGVTdWJyZWRkaXQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5wb3N0LWZvcm0ge1xuICBtYXJnaW46IDJweDtcbn1cblxuLmNvbW1lbnQtbm90aWZpY2F0aW9uIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY3JlYXRlLXBvc3QtbWFpbiB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY3JlYXRlLXBvc3QtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtc3VyZmFjZSk7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0taGYtc2hhZG93KTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1lZGlhLXVwbG9hZC1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4ubWVkaWEtaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVkaWEtZHJvcHpvbmUge1xuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0taGYtYm9yZGVyLXN0cm9uZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMxNDE0MjA7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5tZWRpYS1kcm9wem9uZSBzdHJvbmcge1xuICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG59XG5cbi5tZWRpYS1kcm9wem9uZS5kcmFnLWFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzkzY2VmYjtcbiAgYmFja2dyb3VuZDogIzE3MTcyYTtcbn1cblxuLm1lZGlhLWRyb3B6b25lLnVwbG9hZGluZyB7XG4gIG9wYWNpdHk6IDAuODtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5tZWRpYS1kcm9wem9uZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IHZhcigtLWhmLWZvY3VzLXJpbmcpO1xufVxuXG4uYXR0YWNobWVudC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jbGVhci1hdHRhY2htZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyLXN0cm9uZyk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogNHB4IDEycHg7XG59XG5cbi5jbGVhci1hdHRhY2htZW50OmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xuICBiYWNrZ3JvdW5kOiAjMWExYTI0O1xufVxuXG4uYnRuRGlzY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlci1zdHJvbmcpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAzcHggMThweDtcbiAgbWluLXdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnRuRGlzY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMjQ7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbn1cblxuLmNyZWF0ZS1wb3N0LWhlYWRpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG59XG5cbi5idG5DcmVhdGVQb3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtc3VyZmFjZS1zb2Z0KTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oZi1ib3JkZXItc3Ryb25nKTtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogM3B4IDE4cHg7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmJ0bkNyZWF0ZVBvc3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjI4O1xufVxuXG5zbWFsbCB7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LW11dGVkKTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/post/create-post/create-post.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/post/create-post/create-post.component.ts ***!
    \***********************************************************/

  /*! exports provided: CreatePostComponent */

  /***/
  function srcAppPostCreatePostCreatePostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function () {
      return CreatePostComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/post.service */
    "./src/app/shared/post.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_video_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/video-upload.service */
    "./src/app/shared/video-upload.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_community_community_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/community/community.service */
    "./src/app/community/community.service.ts");
    /* harmony import */


    var src_app_subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/subreddit/subreddit.service */
    "./src/app/subreddit/subreddit.service.ts");

    var CreatePostComponent = /*#__PURE__*/function () {
      function CreatePostComponent(router, route, postService, toastr, videoUploadService, communityService, subredditService) {
        _classCallCheck(this, CreatePostComponent);

        this.router = router;
        this.route = route;
        this.postService = postService;
        this.toastr = toastr;
        this.videoUploadService = videoUploadService;
        this.communityService = communityService;
        this.subredditService = subredditService;
        this.communityOptions = [];
        this.subredditOptions = [];
        this.isLoadingCommunities = false;
        this.isLoadingSubreddits = false;
        this.isUploadingAttachment = false;
        this.isDragActive = false;
        this.uploadedAttachmentFileName = '';
        this.uploadedAttachmentType = '';
        this.acceptedFileTypes = '.jpg,.jpeg,.png,.gif,.webp,.heic,.heif,.mp4,.mov,.webm,.mkv';
        this.preselectedCommunityId = null;
        this.postPayload = {
          postName: '',
          url: '',
          videoKey: '',
          imageKey: '',
          description: '',
          subredditName: undefined,
          communityId: undefined
        };
      }

      _createClass(CreatePostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            postName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            communityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            subredditName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          });
          var queryCommunityId = Number(this.route.snapshot.queryParamMap.get('communityId'));

          if (Number.isFinite(queryCommunityId) && queryCommunityId > 0) {
            this.preselectedCommunityId = queryCommunityId;
            this.createPostForm.patchValue({
              communityId: queryCommunityId
            });
          }

          this.loadCommunities();
          this.loadSubreddits();
        }
      }, {
        key: "createPost",
        value: function createPost() {
          var _this21 = this;

          var _a, _b, _c, _d, _e;

          if (this.createPostForm.invalid) {
            this.toastr.error('Please fill in all required fields');
            return;
          }

          if (this.isUploadingAttachment) {
            this.toastr.info('Media upload is still in progress. Please wait.');
            return;
          }

          var rawCommunityId = (_a = this.createPostForm.get('communityId')) === null || _a === void 0 ? void 0 : _a.value;
          var communityId = rawCommunityId === null || rawCommunityId === '' ? null : Number(rawCommunityId);
          var subredditNameRaw = (((_b = this.createPostForm.get('subredditName')) === null || _b === void 0 ? void 0 : _b.value) || '').trim();
          var subredditName = subredditNameRaw.length > 0 ? subredditNameRaw : null;
          this.postPayload.postName = (_c = this.createPostForm.get('postName')) === null || _c === void 0 ? void 0 : _c.value;
          this.postPayload.communityId = Number.isFinite(communityId) ? communityId : undefined;
          this.postPayload.subredditName = subredditName || undefined;
          this.postPayload.url = (((_d = this.createPostForm.get('url')) === null || _d === void 0 ? void 0 : _d.value) || '').trim();
          this.postPayload.description = (_e = this.createPostForm.get('description')) === null || _e === void 0 ? void 0 : _e.value;
          this.postService.createPost(this.postPayload).subscribe(function () {
            _this21.toastr.success('Post created successfully');

            _this21.router.navigateByUrl('/');
          }, function () {
            _this21.toastr.error('Create post failed. Please login again and try once more.');
          });
        }
      }, {
        key: "onMediaSelected",
        value: function onMediaSelected(event) {
          var input = event.target;
          this.handleSelectedFiles(input.files);
          input.value = '';
        }
      }, {
        key: "onDropZoneClick",
        value: function onDropZoneClick(fileInput) {
          fileInput.click();
        }
      }, {
        key: "onDragOver",
        value: function onDragOver(event) {
          event.preventDefault();
          event.stopPropagation();
          this.isDragActive = true;
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          event.preventDefault();
          event.stopPropagation();
          this.isDragActive = false;
        }
      }, {
        key: "onDrop",
        value: function onDrop(event) {
          var _a;

          event.preventDefault();
          event.stopPropagation();
          this.isDragActive = false;
          this.handleSelectedFiles(((_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.files) || null);
        }
      }, {
        key: "clearAttachment",
        value: function clearAttachment() {
          this.postPayload.videoKey = '';
          this.postPayload.imageKey = '';
          this.uploadedAttachmentFileName = '';
          this.uploadedAttachmentType = '';
        }
      }, {
        key: "discardPost",
        value: function discardPost() {
          this.router.navigateByUrl('/');
        }
      }, {
        key: "loadCommunities",
        value: function loadCommunities() {
          var _this22 = this;

          this.isLoadingCommunities = true;
          this.communityService.getAllCommunities().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            _this22.isLoadingCommunities = false;
          })).subscribe({
            next: function next(communities) {
              _this22.communityOptions = (communities || []).sort(function (a, b) {
                return ((a === null || a === void 0 ? void 0 : a.name) || '').localeCompare((b === null || b === void 0 ? void 0 : b.name) || '');
              });

              if (!_this22.preselectedCommunityId) {
                return;
              }

              var communityExists = _this22.communityOptions.some(function (community) {
                return community.id === _this22.preselectedCommunityId;
              });

              if (communityExists) {
                _this22.createPostForm.patchValue({
                  communityId: _this22.preselectedCommunityId
                });
              }
            },
            error: function error() {
              _this22.communityOptions = [];

              _this22.toastr.error('Failed to load communities');
            }
          });
        }
      }, {
        key: "loadSubreddits",
        value: function loadSubreddits() {
          var _this23 = this;

          this.isLoadingSubreddits = true;
          this.subredditService.getAllSubreddits().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            _this23.isLoadingSubreddits = false;
          })).subscribe({
            next: function next(subreddits) {
              _this23.subredditOptions = (subreddits || []).sort(function (a, b) {
                return ((a === null || a === void 0 ? void 0 : a.name) || '').localeCompare((b === null || b === void 0 ? void 0 : b.name) || '');
              });
            },
            error: function error() {
              _this23.subredditOptions = [];

              _this23.toastr.error('Failed to load branches');
            }
          });
        }
      }, {
        key: "handleSelectedFiles",
        value: function handleSelectedFiles(files) {
          if (!files || files.length === 0) {
            return;
          }

          if (files.length > 1) {
            this.toastr.info('Only one attachment is supported. Using the latest selected file.');
          }

          var file = files.item(files.length - 1);

          if (!file) {
            return;
          }

          var mediaType = this.detectMediaType(file);

          if (!mediaType) {
            this.toastr.error('Unsupported file type. Use jpg, jpeg, png, gif, webp, heic, mp4, mov, webm, or mkv.');
            return;
          }

          if (this.uploadedAttachmentFileName) {
            this.toastr.info("Replacing previous attachment: ".concat(this.uploadedAttachmentFileName));
          }

          this.uploadAttachment(file, mediaType);
        }
      }, {
        key: "uploadAttachment",
        value: function uploadAttachment(file, mediaType) {
          var _this24 = this;

          this.isUploadingAttachment = true;
          this.videoUploadService.createMediaUploadUrl(file.name, file.type, mediaType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (uploadData) {
            return _this24.videoUploadService.uploadFile(uploadData.uploadUrl, file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
              _this24.postPayload.videoKey = '';
              _this24.postPayload.imageKey = '';

              if (mediaType === 'VIDEO') {
                _this24.postPayload.videoKey = uploadData.objectKey;
              } else {
                _this24.postPayload.imageKey = uploadData.objectKey;
              }

              _this24.uploadedAttachmentFileName = file.name;
              _this24.uploadedAttachmentType = mediaType.toLowerCase();

              _this24.toastr.success("".concat(_this24.uploadedAttachmentType, " uploaded successfully"));
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            _this24.isUploadingAttachment = false;
          })).subscribe({
            error: function error(_error11) {
              var errorMessage = _this24.extractUploadErrorMessage(_error11);

              _this24.toastr.error(errorMessage);
            }
          });
        }
      }, {
        key: "extractUploadErrorMessage",
        value: function extractUploadErrorMessage(error) {
          var _a;

          var backendMessage = ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) || (error === null || error === void 0 ? void 0 : error.message);

          if (backendMessage) {
            return backendMessage;
          }

          if ((error === null || error === void 0 ? void 0 : error.status) === 0) {
            return 'Upload failed. Check network/S3 CORS configuration and try again.';
          }

          return 'Attachment upload failed';
        }
      }, {
        key: "detectMediaType",
        value: function detectMediaType(file) {
          var fileType = (file.type || '').toLowerCase();

          if (this.isSupportedImage(fileType, file.name)) {
            return 'IMAGE';
          }

          if (this.isSupportedVideo(fileType, file.name)) {
            return 'VIDEO';
          }

          return null;
        }
      }, {
        key: "isSupportedImage",
        value: function isSupportedImage(fileType, fileName) {
          if (['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/heic', 'image/heif'].includes(fileType)) {
            return true;
          }

          return /\.(jpe?g|png|gif|webp|heic|heif)$/i.test(fileName || '');
        }
      }, {
        key: "isSupportedVideo",
        value: function isSupportedVideo(fileType, fileName) {
          if (['video/mp4', 'video/quicktime', 'video/webm', 'video/x-matroska'].includes(fileType)) {
            return true;
          }

          return /\.(mp4|mov|webm|mkv)$/i.test(fileName || '');
        }
      }]);

      return CreatePostComponent;
    }();

    CreatePostComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: src_app_shared_video_upload_service__WEBPACK_IMPORTED_MODULE_6__["VideoUploadService"]
      }, {
        type: src_app_community_community_service__WEBPACK_IMPORTED_MODULE_8__["CommunityService"]
      }, {
        type: src_app_subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_9__["SubredditService"]
      }];
    };

    CreatePostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-post',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-post.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/create-post/create-post.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-post.component.css */
      "./src/app/post/create-post/create-post.component.css"))["default"]]
    })], CreatePostComponent);
    /***/
  },

  /***/
  "./src/app/post/my-likes/my-likes.component.css":
  /*!******************************************************!*\
    !*** ./src/app/post/my-likes/my-likes.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostMyLikesMyLikesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-likes-page {\n  padding: 14px 20px 16px;\n  max-width: 860px;\n}\n\n.my-likes-page h2 {\n  margin-bottom: 12px;\n}\n\n@media (max-width: 1023px) {\n  .my-likes-page {\n    padding: 12px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9teS1saWtlcy9teS1saWtlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wb3N0L215LWxpa2VzL215LWxpa2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktbGlrZXMtcGFnZSB7XG4gIHBhZGRpbmc6IDE0cHggMjBweCAxNnB4O1xuICBtYXgtd2lkdGg6IDg2MHB4O1xufVxuXG4ubXktbGlrZXMtcGFnZSBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLm15LWxpa2VzLXBhZ2Uge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/post/my-likes/my-likes.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/post/my-likes/my-likes.component.ts ***!
    \*****************************************************/

  /*! exports provided: MyLikesComponent */

  /***/
  function srcAppPostMyLikesMyLikesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyLikesComponent", function () {
      return MyLikesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/post.service */
    "./src/app/shared/post.service.ts");

    var MyLikesComponent = /*#__PURE__*/function () {
      function MyLikesComponent(postService, toastr) {
        _classCallCheck(this, MyLikesComponent);

        this.postService = postService;
        this.toastr = toastr;
        this.posts = [];
        this.loading = true;
      }

      _createClass(MyLikesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.postService.getMyLikedPosts().subscribe({
            next: function next(posts) {
              _this25.posts = posts || [];
              _this25.loading = false;
            },
            error: function error(_error12) {
              var _a;

              _this25.loading = false;

              _this25.toastr.error(((_a = _error12 === null || _error12 === void 0 ? void 0 : _error12.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to load liked posts');
            }
          });
        }
      }]);

      return MyLikesComponent;
    }();

    MyLikesComponent.ctorParameters = function () {
      return [{
        type: _shared_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }];
    };

    MyLikesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-likes',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-likes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/my-likes/my-likes.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-likes.component.css */
      "./src/app/post/my-likes/my-likes.component.css"))["default"]]
    })], MyLikesComponent);
    /***/
  },

  /***/
  "./src/app/post/my-posts/my-posts.component.css":
  /*!******************************************************!*\
    !*** ./src/app/post/my-posts/my-posts.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostMyPostsMyPostsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-posts-page {\n  padding: 14px 20px 16px;\n  max-width: 860px;\n}\n\n.my-posts-page h2 {\n  margin-bottom: 12px;\n}\n\n@media (max-width: 1023px) {\n  .my-posts-page {\n    padding: 12px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9teS1wb3N0cy9teS1wb3N0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wb3N0L215LXBvc3RzL215LXBvc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktcG9zdHMtcGFnZSB7XG4gIHBhZGRpbmc6IDE0cHggMjBweCAxNnB4O1xuICBtYXgtd2lkdGg6IDg2MHB4O1xufVxuXG4ubXktcG9zdHMtcGFnZSBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLm15LXBvc3RzLXBhZ2Uge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/post/my-posts/my-posts.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/post/my-posts/my-posts.component.ts ***!
    \*****************************************************/

  /*! exports provided: MyPostsComponent */

  /***/
  function srcAppPostMyPostsMyPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyPostsComponent", function () {
      return MyPostsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/post.service */
    "./src/app/shared/post.service.ts");
    /* harmony import */


    var _shared_post_sort_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/post-sort.util */
    "./src/app/shared/post-sort.util.ts");

    var MyPostsComponent = /*#__PURE__*/function () {
      function MyPostsComponent(postService, toastr) {
        _classCallCheck(this, MyPostsComponent);

        this.postService = postService;
        this.toastr = toastr;
        this.posts = [];
        this.loading = true;
        this.deletingPostId = null;
      }

      _createClass(MyPostsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadMyPosts();
        }
      }, {
        key: "onDeleteRequested",
        value: function onDeleteRequested(post) {
          var _this26 = this;

          if (!(post === null || post === void 0 ? void 0 : post.id) || this.deletingPostId) {
            return;
          }

          var confirmed = window.confirm('Delete this post? This action cannot be undone.');

          if (!confirmed) {
            return;
          }

          this.deletingPostId = post.id;
          this.postService.deletePost(post.id).subscribe({
            next: function next() {
              _this26.posts = _this26.posts.filter(function (item) {
                return item.id !== post.id;
              });
              _this26.deletingPostId = null;

              _this26.toastr.success('Post deleted');
            },
            error: function error(_error13) {
              var _a;

              _this26.deletingPostId = null;

              _this26.toastr.error(((_a = _error13 === null || _error13 === void 0 ? void 0 : _error13.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to delete post');
            }
          });
        }
      }, {
        key: "loadMyPosts",
        value: function loadMyPosts() {
          var _this27 = this;

          this.postService.getMyPosts().subscribe({
            next: function next(posts) {
              _this27.posts = Object(_shared_post_sort_util__WEBPACK_IMPORTED_MODULE_4__["sortPostsByNewest"])(posts);
              _this27.loading = false;
            },
            error: function error(_error14) {
              var _a;

              _this27.loading = false;

              _this27.toastr.error(((_a = _error14 === null || _error14 === void 0 ? void 0 : _error14.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to load your posts');
            }
          });
        }
      }]);

      return MyPostsComponent;
    }();

    MyPostsComponent.ctorParameters = function () {
      return [{
        type: _shared_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }];
    };

    MyPostsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-posts',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-posts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/my-posts/my-posts.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-posts.component.css */
      "./src/app/post/my-posts/my-posts.component.css"))["default"]]
    })], MyPostsComponent);
    /***/
  },

  /***/
  "./src/app/post/view-post/view-post.component.css":
  /*!********************************************************!*\
    !*** ./src/app/post/view-post/view-post.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostViewPostViewPostComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".view-post-main {\n  max-width: 980px;\n  margin: 0 auto;\n}\n\n.post-title {\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 1;\n}\n\n.post-title:hover {\n  opacity: 0.85;\n}\n\n.subreddit-text {\n  font-weight: bold;\n}\n\n.post-url {\n  color: var(--hf-text);\n}\n\n.username {\n  color: var(--hf-text-muted);\n}\n\n.post-text {\n  margin-top: 10px;\n  color: var(--hf-text-secondary);\n}\n\n.post-video,\n.post-image {\n  width: 100%;\n  max-height: 460px;\n  margin-top: 10px;\n  border-radius: 8px;\n  background: #000;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.post-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n.post {\n  border: 1px solid var(--hf-border);\n  margin-top: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n  background-color: var(--hf-surface);\n  color: var(--hf-text-secondary);\n  position: relative;\n  border-radius: 10px;\n  box-shadow: var(--hf-shadow);\n  padding: 10px;\n}\n\n.comment-submit {\n  border: 1px solid var(--hf-border-strong);\n  border-radius: 999px;\n  background-color: var(--hf-surface-soft);\n  color: var(--hf-text);\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .5px;\n  line-height: 24px;\n  text-transform: uppercase;\n  padding: 3px 18px;\n  min-width: 120px;\n  height: 36px;\n}\n\n.comment-submit:hover {\n  background-color: #1b1b28;\n}\n\n.comment {\n  border: 1px solid var(--hf-border);\n  margin-bottom: 10px;\n  overflow: hidden;\n  background-color: var(--hf-surface-soft);\n  color: var(--hf-text-secondary);\n  position: relative;\n  border-radius: 8px;\n  padding: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC92aWV3LXBvc3Qvdmlldy1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLCtCQUErQjtBQUNqQzs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxvQkFBb0I7RUFDcEIsd0NBQXdDO0VBQ3hDLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHdDQUF3QztFQUN4QywrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wb3N0L3ZpZXctcG9zdC92aWV3LXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3LXBvc3QtbWFpbiB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucG9zdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5wb3N0LXRpdGxlOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44NTtcbn1cblxuLnN1YnJlZGRpdC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wb3N0LXVybCB7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbn1cblxuLnVzZXJuYW1lIHtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtbXV0ZWQpO1xufVxuXG4ucG9zdC10ZXh0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLnBvc3QtdmlkZW8sXG4ucG9zdC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA0NjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnBvc3QtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wb3N0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyKTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtc3VyZmFjZSk7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0taGYtc2hhZG93KTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvbW1lbnQtc3VibWl0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyLXN0cm9uZyk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1zdXJmYWNlLXNvZnQpO1xuICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDNweCAxOHB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDM2cHg7XG59XG5cbi5jb21tZW50LXN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjFiMjg7XG59XG5cbi5jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtc3VyZmFjZS1zb2Z0KTtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/post/view-post/view-post.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/post/view-post/view-post.component.ts ***!
    \*******************************************************/

  /*! exports provided: ViewPostComponent */

  /***/
  function srcAppPostViewPostViewPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewPostComponent", function () {
      return ViewPostComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/post.service */
    "./src/app/shared/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/comment/comment.service */
    "./src/app/comment/comment.service.ts");

    var ViewPostComponent = /*#__PURE__*/function () {
      function ViewPostComponent(postService, activateRoute, commentService, router) {
        _classCallCheck(this, ViewPostComponent);

        this.postService = postService;
        this.activateRoute = activateRoute;
        this.commentService = commentService;
        this.router = router;
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          text: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.commentPayload = {
          text: '',
          postId: 0
        };
      }

      _createClass(ViewPostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.routeSubscription = this.activateRoute.paramMap.subscribe(function (params) {
            var idParam = params.get('id');
            var parsedId = idParam ? Number(idParam) : NaN;

            if (Number.isNaN(parsedId) || parsedId <= 0) {
              _this28.router.navigateByUrl('/');

              return;
            }

            _this28.postId = parsedId;
            _this28.commentPayload.postId = _this28.postId;

            _this28.getPostById();

            _this28.getCommentsForPost();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _a;

          (_a = this.routeSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        }
      }, {
        key: "postComment",
        value: function postComment() {
          var _this29 = this;

          var _a;

          this.commentPayload.text = (_a = this.commentForm.get('text')) === null || _a === void 0 ? void 0 : _a.value;
          this.commentService.postComment(this.commentPayload).subscribe({
            next: function next() {
              var _a;

              (_a = _this29.commentForm.get('text')) === null || _a === void 0 ? void 0 : _a.setValue('');

              _this29.getCommentsForPost();
            }
          });
        }
      }, {
        key: "hasVideo",
        value: function hasVideo() {
          var _a;

          return !!((_a = this.post) === null || _a === void 0 ? void 0 : _a.videoUrl);
        }
      }, {
        key: "getImageUrl",
        value: function getImageUrl() {
          if (!this.post) {
            return null;
          }

          if (this.post.imageUrl) {
            return this.post.imageUrl;
          }

          if (this.post.url && this.isLikelyImageUrl(this.post.url)) {
            return this.post.url;
          }

          return null;
        }
      }, {
        key: "getCommunityLabel",
        value: function getCommunityLabel() {
          var _a, _b;

          return ((_a = this.post) === null || _a === void 0 ? void 0 : _a.communityName) || ((_b = this.post) === null || _b === void 0 ? void 0 : _b.subredditName) || 'community';
        }
      }, {
        key: "getCommunitySlug",
        value: function getCommunitySlug() {
          var _a;

          return ((_a = this.post) === null || _a === void 0 ? void 0 : _a.communitySlug) || null;
        }
      }, {
        key: "isExternalLinkPost",
        value: function isExternalLinkPost() {
          var _a;

          if (!((_a = this.post) === null || _a === void 0 ? void 0 : _a.url)) {
            return false;
          }

          return !this.isLikelyImageUrl(this.post.url) && !this.post.imageUrl;
        }
      }, {
        key: "getPostById",
        value: function getPostById() {
          var _this30 = this;

          this.postService.getPost(this.postId).subscribe({
            next: function next(data) {
              _this30.post = data;
            },
            error: function error() {
              _this30.router.navigateByUrl('/');
            }
          });
        }
      }, {
        key: "getCommentsForPost",
        value: function getCommentsForPost() {
          var _this31 = this;

          this.commentService.getAllCommentsForPost(this.postId).subscribe({
            next: function next(data) {
              _this31.comments = data;
            },
            error: function error() {
              _this31.comments = [];
            }
          });
        }
      }, {
        key: "isLikelyImageUrl",
        value: function isLikelyImageUrl(url) {
          return /\.(png|jpe?g|gif|webp|bmp|svg|avif)(\?.*)?$/i.test(url);
        }
      }]);

      return ViewPostComponent;
    }();

    ViewPostComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_5__["CommentService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ViewPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-post',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./view-post.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/view-post/view-post.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./view-post.component.css */
      "./src/app/post/view-post/view-post.component.css"))["default"]]
    })], ViewPostComponent);
    /***/
  },

  /***/
  "./src/app/shared/app-shell/app-shell.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/shared/app-shell/app-shell.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedAppShellAppShellComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".humanfirst-body {\n  padding: 12px 20px 0;\n}\n\n.hf-shell-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.hf-shell-main {\n  min-width: 0;\n  padding-bottom: 12px;\n}\n\n.hf-shell-main-inner {\n  width: 100%;\n  max-width: 720px;\n  margin: 0;\n}\n\n.hf-shell-right {\n  min-width: 0;\n}\n\n.hf-shell-right-inner {\n  width: 100%;\n  max-width: 320px;\n  margin: 0;\n}\n\n.hf-right-gutter {\n  display: none;\n}\n\n@media (min-width: 1280px) {\n  .humanfirst-body {\n    padding: 14px 24px 0;\n  }\n\n  .hf-shell-layout {\n    display: grid;\n    grid-template-columns: 260px minmax(0, 720px) 320px minmax(0, 1fr);\n    -moz-column-gap: 28px;\n         column-gap: 28px;\n    align-items: start;\n  }\n\n  .hf-shell-main-inner {\n    max-width: 720px;\n  }\n\n  .hf-shell-right-inner {\n    width: 320px;\n    max-width: 320px;\n  }\n\n  .hf-right-gutter {\n    display: block;\n    min-height: 1px;\n  }\n}\n\n@media (min-width: 1024px) and (max-width: 1279px) {\n  .humanfirst-body {\n    padding: 14px 18px 0;\n  }\n\n  .hf-shell-layout {\n    display: grid;\n    grid-template-columns: 260px minmax(0, 1fr) 300px;\n    -moz-column-gap: 24px;\n         column-gap: 24px;\n    align-items: start;\n  }\n\n  .hf-shell-right-inner {\n    width: 300px;\n    max-width: 300px;\n  }\n}\n\n@media (max-width: 1023px) {\n  .humanfirst-body {\n    padding: 12px 12px 0;\n  }\n\n  .hf-shell-right-inner {\n    max-width: 720px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FwcC1zaGVsbC9hcHAtc2hlbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrRUFBa0U7SUFDbEUscUJBQWdCO1NBQWhCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGlEQUFpRDtJQUNqRCxxQkFBZ0I7U0FBaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYXBwLXNoZWxsL2FwcC1zaGVsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmh1bWFuZmlyc3QtYm9keSB7XG4gIHBhZGRpbmc6IDEycHggMjBweCAwO1xufVxuXG4uaGYtc2hlbGwtbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uaGYtc2hlbGwtbWFpbiB7XG4gIG1pbi13aWR0aDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5oZi1zaGVsbC1tYWluLWlubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNzIwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhmLXNoZWxsLXJpZ2h0IHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uaGYtc2hlbGwtcmlnaHQtaW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaGYtcmlnaHQtZ3V0dGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAuaHVtYW5maXJzdC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxNHB4IDI0cHggMDtcbiAgfVxuXG4gIC5oZi1zaGVsbC1sYXlvdXQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNjBweCBtaW5tYXgoMCwgNzIwcHgpIDMyMHB4IG1pbm1heCgwLCAxZnIpO1xuICAgIGNvbHVtbi1nYXA6IDI4cHg7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICB9XG5cbiAgLmhmLXNoZWxsLW1haW4taW5uZXIge1xuICAgIG1heC13aWR0aDogNzIwcHg7XG4gIH1cblxuICAuaGYtc2hlbGwtcmlnaHQtaW5uZXIge1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICB9XG5cbiAgLmhmLXJpZ2h0LWd1dHRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgLmh1bWFuZmlyc3QtYm9keSB7XG4gICAgcGFkZGluZzogMTRweCAxOHB4IDA7XG4gIH1cblxuICAuaGYtc2hlbGwtbGF5b3V0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjYwcHggbWlubWF4KDAsIDFmcikgMzAwcHg7XG4gICAgY29sdW1uLWdhcDogMjRweDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIH1cblxuICAuaGYtc2hlbGwtcmlnaHQtaW5uZXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLmh1bWFuZmlyc3QtYm9keSB7XG4gICAgcGFkZGluZzogMTJweCAxMnB4IDA7XG4gIH1cblxuICAuaGYtc2hlbGwtcmlnaHQtaW5uZXIge1xuICAgIG1heC13aWR0aDogNzIwcHg7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/app-shell/app-shell.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/app-shell/app-shell.component.ts ***!
    \*********************************************************/

  /*! exports provided: AppShellComponent */

  /***/
  function srcAppSharedAppShellAppShellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppShellComponent", function () {
      return AppShellComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppShellComponent = function AppShellComponent() {
      _classCallCheck(this, AppShellComponent);

      this.selectedDomain = 'all';
      this.sidebarReloadToken = 0;
      this.domainSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppShellComponent.prototype, "selectedDomain", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppShellComponent.prototype, "sidebarReloadToken", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AppShellComponent.prototype, "domainSelected", void 0);
    AppShellComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hf-app-shell',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app-shell.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/app-shell/app-shell.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app-shell.component.css */
      "./src/app/shared/app-shell/app-shell.component.css"))["default"]]
    })], AppShellComponent);
    /***/
  },

  /***/
  "./src/app/shared/hf-sidebar/hf-sidebar.component.css":
  /*!************************************************************!*\
    !*** ./src/app/shared/hf-sidebar/hf-sidebar.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedHfSidebarHfSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n\n.hf-sidebar {\n  border: 1px solid var(--hf-border);\n  border-radius: 12px;\n  background: var(--hf-surface);\n  padding: 16px 10px 14px;\n  box-shadow: var(--hf-shadow);\n  position: static;\n}\n\n.hf-nav,\n.hf-home-subitems,\n.hf-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.hf-home-subitems {\n  margin-top: 2px;\n}\n\n.hf-divider {\n  border: 0;\n  border-top: 1px solid var(--hf-border);\n  margin: 10px 0;\n}\n\n.hf-section {\n  margin-bottom: 10px;\n}\n\n.hf-section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--hf-text-muted);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  padding: 6px 8px;\n}\n\n.hf-row {\n  width: 100%;\n  border: 1px solid transparent;\n  border-radius: 18px;\n  background: transparent;\n  color: var(--hf-text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-align: left;\n  padding: 9px 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.hf-sub-row {\n  margin-left: 24px;\n  width: calc(100% - 24px);\n  font-size: 13px;\n}\n\n.hf-row:hover {\n  background: #181824;\n  color: var(--hf-text);\n}\n\n.hf-row.active {\n  background: #1b1b28;\n  border-color: var(--hf-border-strong);\n  color: var(--hf-text);\n  font-weight: 600;\n}\n\n.hf-icon {\n  width: 16px;\n  color: var(--hf-text-muted);\n}\n\n.hf-community-avatar {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 1px solid #2e2f3e;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  background: #1d2130;\n  color: #dbe8ff;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n\n.hf-community-avatar img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.hf-community-avatar.placeholder {\n  background: linear-gradient(140deg, #1f2f3f, #253248);\n}\n\n.hf-row:hover .hf-icon,\n.hf-row.active .hf-icon {\n  color: var(--hf-text-secondary);\n}\n\n.hf-action-row {\n  margin: 2px 0;\n}\n\n.hf-static-row {\n  cursor: default;\n  background: transparent;\n  color: var(--hf-text-secondary);\n}\n\n.hf-static-row:hover {\n  background: transparent;\n  color: var(--hf-text-secondary);\n}\n\n.hf-topic-month-row {\n  font-weight: 600;\n}\n\n@media (min-width: 1024px) {\n  .hf-sidebar {\n    width: 260px;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 12px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hmLXNpZGViYXIvaGYtc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsc0NBQXNDO0VBQ3RDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxREFBcUQ7QUFDdkQ7O0FBRUE7O0VBRUUsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixTQUFTO0VBQ1g7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZi1zaWRlYmFyL2hmLXNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZi1zaWRlYmFyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGYtc3VyZmFjZSk7XG4gIHBhZGRpbmc6IDE2cHggMTBweCAxNHB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1oZi1zaGFkb3cpO1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuXG4uaGYtbmF2LFxuLmhmLWhvbWUtc3ViaXRlbXMsXG4uaGYtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xufVxuXG4uaGYtaG9tZS1zdWJpdGVtcyB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLmhmLWRpdmlkZXIge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmhmLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaGYtc2VjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiA2cHggOHB4O1xufVxuXG4uaGYtcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA5cHggMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oZi1zdWItcm93IHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNHB4KTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaGYtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzE4MTgyNDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xufVxuXG4uaGYtcm93LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxYjFiMjg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taGYtYm9yZGVyLXN0cm9uZyk7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhmLWljb24ge1xuICB3aWR0aDogMTZweDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtbXV0ZWQpO1xufVxuXG4uaGYtY29tbXVuaXR5LWF2YXRhciB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJlMmYzZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjMWQyMTMwO1xuICBjb2xvcjogI2RiZThmZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmhmLWNvbW11bml0eS1hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5oZi1jb21tdW5pdHktYXZhdGFyLnBsYWNlaG9sZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0MGRlZywgIzFmMmYzZiwgIzI1MzI0OCk7XG59XG5cbi5oZi1yb3c6aG92ZXIgLmhmLWljb24sXG4uaGYtcm93LmFjdGl2ZSAuaGYtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5oZi1hY3Rpb24tcm93IHtcbiAgbWFyZ2luOiAycHggMDtcbn1cblxuLmhmLXN0YXRpYy1yb3cge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uaGYtc3RhdGljLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uaGYtdG9waWMtbW9udGgtcm93IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuaGYtc2lkZWJhciB7XG4gICAgd2lkdGg6IDI2MHB4O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAxMnB4O1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/hf-sidebar/hf-sidebar.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/hf-sidebar/hf-sidebar.component.ts ***!
    \***********************************************************/

  /*! exports provided: HfSidebarComponent */

  /***/
  function srcAppSharedHfSidebarHfSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HfSidebarComponent", function () {
      return HfSidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _community_community_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../community/community.service */
    "./src/app/community/community.service.ts");
    /* harmony import */


    var _topics_topic_discussion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../topics/topic-discussion.service */
    "./src/app/topics/topic-discussion.service.ts");

    var DEFAULT_MONTHLY_TOPIC_LABEL = 'Topic of the month - (manually change each month)';
    var DEFAULT_WEEKLY_TOPIC_LABEL = 'Topic of the week - (manually change each week)';

    var HfSidebarComponent = /*#__PURE__*/function () {
      function HfSidebarComponent(communityService, topicDiscussionService, router, toastr) {
        _classCallCheck(this, HfSidebarComponent);

        this.communityService = communityService;
        this.topicDiscussionService = topicDiscussionService;
        this.router = router;
        this.toastr = toastr;
        this.selectedDomain = 'all';
        this.reloadToken = 0;
        this.domainSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.communityItems = [];
        this.monthlyTopicLabel = DEFAULT_MONTHLY_TOPIC_LABEL;
        this.weeklyTopicLabel = DEFAULT_WEEKLY_TOPIC_LABEL;
        this.primaryNavItems = [{
          key: 'home',
          label: 'Home',
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHome"],
          domain: 'all'
        }];
        this.homeSubItems = [{
          key: 'discussions',
          label: 'discussions',
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faComments"],
          domain: 'discussions'
        }, {
          key: 'ai-prospects',
          label: 'AI prospects',
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLayerGroup"],
          domain: 'ai-prospects'
        }];
        this.faCompass = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCompass"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"];
        this.faComments = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faComments"];
        this.faChevronDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChevronDown"];
        this.currentTopicSlug = null;
      }

      _createClass(HfSidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.refreshSidebarContent();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!changes.reloadToken || changes.reloadToken.isFirstChange()) {
            return;
          }

          this.loadCommunities();
        }
      }, {
        key: "onPrimaryNavClick",
        value: function onPrimaryNavClick(item) {
          if (item.domain) {
            this.selectDomain(item.domain);
          }
        }
      }, {
        key: "onHomeSubItemClick",
        value: function onHomeSubItemClick(item) {
          if (item.domain) {
            this.selectDomain(item.domain);
          }
        }
      }, {
        key: "onCommunityClick",
        value: function onCommunityClick(item) {
          if (!(item === null || item === void 0 ? void 0 : item.slug)) {
            return;
          }

          this.router.navigate(['/communities', item.slug]);
        }
      }, {
        key: "isItemActive",
        value: function isItemActive(item) {
          return !!item.domain && this.selectedDomain === item.domain;
        }
      }, {
        key: "hasCommunityAvatar",
        value: function hasCommunityAvatar(item) {
          return !!(item === null || item === void 0 ? void 0 : item.avatarImageUrl);
        }
      }, {
        key: "getCommunityInitial",
        value: function getCommunityInitial(item) {
          var name = (item === null || item === void 0 ? void 0 : item.name) || '';
          return name.trim().charAt(0).toUpperCase() || 'C';
        }
      }, {
        key: "goToCreateSubreddit",
        value: function goToCreateSubreddit() {
          this.router.navigateByUrl('/create-subreddit');
        }
      }, {
        key: "goToCurrentTopic",
        value: function goToCurrentTopic() {
          if (this.currentTopicSlug) {
            this.router.navigate(['/topics', this.currentTopicSlug]);
            return;
          }

          this.router.navigateByUrl('/topics');
        }
      }, {
        key: "goToMonthlyTopic",
        value: function goToMonthlyTopic() {
          this.router.navigateByUrl('/topics');
        }
      }, {
        key: "goToTopicArchive",
        value: function goToTopicArchive() {
          this.router.navigateByUrl('/topics/archive');
        }
      }, {
        key: "goToCommunityDirectory",
        value: function goToCommunityDirectory() {
          this.router.navigateByUrl('/communities');
        }
      }, {
        key: "goToMyComments",
        value: function goToMyComments() {
          this.router.navigateByUrl('/my-comments');
        }
      }, {
        key: "selectDomain",
        value: function selectDomain(domain) {
          this.domainSelected.emit(domain);
        }
      }, {
        key: "refreshSidebarContent",
        value: function refreshSidebarContent() {
          this.loadTopicLabels();
          this.loadCommunities();
        }
      }, {
        key: "loadTopicLabels",
        value: function loadTopicLabels() {
          var _this32 = this;

          this.topicDiscussionService.getCurrentTopic().subscribe({
            next: function next(topic) {
              _this32.monthlyTopicLabel = "Topic of the month - ".concat(topic.monthTitle);
              _this32.weeklyTopicLabel = "Topic of the week - ".concat(topic.weekTitle);
              _this32.currentTopicSlug = topic.slug || null;
            },
            error: function error() {
              _this32.monthlyTopicLabel = DEFAULT_MONTHLY_TOPIC_LABEL;
              _this32.weeklyTopicLabel = DEFAULT_WEEKLY_TOPIC_LABEL;
              _this32.currentTopicSlug = null;
            }
          });
        }
      }, {
        key: "loadCommunities",
        value: function loadCommunities() {
          var _this33 = this;

          this.communityService.getAllCommunities().subscribe({
            next: function next(communities) {
              _this33.communityItems = communities || [];
            },
            error: function error() {
              _this33.communityItems = [];

              _this33.toastr.error('Failed to load communities');
            }
          });
        }
      }]);

      return HfSidebarComponent;
    }();

    HfSidebarComponent.ctorParameters = function () {
      return [{
        type: _community_community_service__WEBPACK_IMPORTED_MODULE_5__["CommunityService"]
      }, {
        type: _topics_topic_discussion_service__WEBPACK_IMPORTED_MODULE_6__["TopicDiscussionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HfSidebarComponent.prototype, "selectedDomain", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HfSidebarComponent.prototype, "reloadToken", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], HfSidebarComponent.prototype, "domainSelected", void 0);
    HfSidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hf-sidebar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./hf-sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/hf-sidebar/hf-sidebar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./hf-sidebar.component.css */
      "./src/app/shared/hf-sidebar/hf-sidebar.component.css"))["default"]]
    })], HfSidebarComponent);
    /***/
  },

  /***/
  "./src/app/shared/post-sort.util.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/post-sort.util.ts ***!
    \******************************************/

  /*! exports provided: sortPostsByNewest */

  /***/
  function srcAppSharedPostSortUtilTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sortPostsByNewest", function () {
      return sortPostsByNewest;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function sortPostsByNewest(posts) {
      return _toConsumableArray(posts || []).sort(function (a, b) {
        var createdA = parseTimestamp(a === null || a === void 0 ? void 0 : a.createdAt);
        var createdB = parseTimestamp(b === null || b === void 0 ? void 0 : b.createdAt);

        if (createdA !== createdB) {
          return createdB - createdA;
        }

        return ((b === null || b === void 0 ? void 0 : b.id) || 0) - ((a === null || a === void 0 ? void 0 : a.id) || 0);
      });
    }

    function parseTimestamp(value) {
      if (!value) {
        return 0;
      }

      var parsed = new Date(value).getTime();
      return Number.isNaN(parsed) ? 0 : parsed;
    }
    /***/

  },

  /***/
  "./src/app/shared/post-tile/post-tile.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/shared/post-tile/post-tile.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedPostTilePostTileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hf-post-card {\n    border: 1px solid var(--hf-border);\n    border-radius: 12px;\n    background: var(--hf-surface);\n    color: var(--hf-text-secondary);\n    margin-bottom: 12px;\n    padding: 12px 14px;\n    box-shadow: var(--hf-shadow);\n}\n\n.hf-post-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 8px;\n}\n\n.hf-post-meta {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    font-size: 12px;\n    color: var(--hf-text-muted);\n}\n\n.hf-community-link {\n    border: 0;\n    background: transparent;\n    padding: 0;\n    margin: 0;\n    font-weight: 600;\n    color: var(--hf-text-secondary);\n    cursor: pointer;\n}\n\n.hf-community-link:hover {\n    color: var(--hf-text);\n    text-decoration: underline;\n}\n\n.hf-author {\n    font-weight: 600;\n    color: var(--hf-text-secondary);\n}\n\n.hf-dot {\n    color: var(--hf-text-muted);\n}\n\n.hf-overflow-btn {\n    border: 1px solid transparent;\n    background: transparent;\n    color: var(--hf-text-muted);\n    cursor: pointer;\n    padding: 4px 6px;\n    border-radius: 14px;\n}\n\n.hf-overflow-btn:hover {\n    background: #1a1a24;\n    color: var(--hf-text);\n}\n\n.hf-post-title {\n    font-size: 20px;\n    line-height: 1.3;\n    font-weight: 700;\n    margin-bottom: 8px;\n    color: var(--hf-text);\n}\n\n.hf-post-title-link {\n    color: inherit;\n    text-decoration: none;\n}\n\n.hf-post-title-link:hover {\n    text-decoration: underline;\n}\n\n.hf-post-link-preview {\n    display: block;\n    margin: 0 0 10px;\n    color: var(--hf-text-muted);\n    font-size: 12px;\n    text-decoration: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.hf-post-link-preview:hover {\n    color: var(--hf-text-secondary);\n    text-decoration: underline;\n}\n\n.hf-text-preview-btn {\n    width: 100%;\n    border: 0;\n    background: transparent;\n    text-align: left;\n    padding: 0;\n    cursor: pointer;\n}\n\n.hf-text-preview {\n    margin: 0 0 10px;\n    color: var(--hf-text-secondary);\n    font-size: 14px;\n    line-height: 1.45;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.hf-media-wrap {\n    width: 100%;\n    margin: 0 0 10px;\n    position: relative;\n    border-radius: 10px;\n    overflow: hidden;\n    background: #0f1114;\n    aspect-ratio: 1 / 1;\n    border: 0;\n    padding: 0;\n    cursor: pointer;\n}\n\n.hf-media-content {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.hf-media-badge {\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    padding: 6px 9px;\n    border-radius: 14px;\n    background: rgba(0, 0, 0, 0.6);\n    color: var(--hf-text);\n    font-size: 12px;\n}\n\n.hf-post-footer {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 8px;\n    border-top: 1px solid var(--hf-border);\n    padding-top: 10px;\n}\n\n.hf-action-btn {\n    border: 1px solid var(--hf-border-strong);\n    background: var(--hf-surface-soft);\n    color: var(--hf-text-secondary);\n    border-radius: 18px;\n    padding: 5px 10px;\n    cursor: pointer;\n    font-size: 12px;\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.hf-action-btn:hover {\n    background: #1b1b28;\n    color: var(--hf-text);\n}\n\n.hf-delete-btn {\n    border-color: #5a1f2d;\n    color: #ff8fa8;\n}\n\n.hf-delete-btn:hover {\n    background: #3a1420;\n    color: #ffc5d3;\n}\n\n.hf-delete-btn:disabled {\n    opacity: 0.55;\n    cursor: not-allowed;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Bvc3QtdGlsZS9wb3N0LXRpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixRQUFRO0lBQ1Isc0NBQXNDO0lBQ3RDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wb3N0LXRpbGUvcG9zdC10aWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGYtcG9zdC1jYXJkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taGYtc3VyZmFjZSk7XG4gICAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEycHggMTRweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1oZi1zaGFkb3cpO1xufVxuXG4uaGYtcG9zdC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uaGYtcG9zdC1tZXRhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dC1tdXRlZCk7XG59XG5cbi5oZi1jb21tdW5pdHktbGluayB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oZi1jb21tdW5pdHktbGluazpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaGYtYXV0aG9yIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5oZi1kb3Qge1xuICAgIGNvbG9yOiB2YXIoLS1oZi10ZXh0LW11dGVkKTtcbn1cblxuLmhmLW92ZXJmbG93LWJ0biB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLWhmLXRleHQtbXV0ZWQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA0cHggNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi5oZi1vdmVyZmxvdy1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMxYTFhMjQ7XG4gICAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xufVxuXG4uaGYtcG9zdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xufVxuXG4uaGYtcG9zdC10aXRsZS1saW5rIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5oZi1wb3N0LXRpdGxlLWxpbms6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaGYtcG9zdC1saW5rLXByZXZpZXcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgY29sb3I6IHZhcigtLWhmLXRleHQtbXV0ZWQpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaGYtcG9zdC1saW5rLXByZXZpZXc6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5oZi10ZXh0LXByZXZpZXctYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhmLXRleHQtcHJldmlldyB7XG4gICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS40NTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaGYtbWVkaWEtd3JhcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6ICMwZjExMTQ7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oZi1tZWRpYS1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5oZi1tZWRpYS1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDZweCA5cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmhmLXBvc3QtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogOHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uaGYtYWN0aW9uLWJ0biB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyLXN0cm9uZyk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taGYtc3VyZmFjZS1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNnB4O1xufVxuXG4uaGYtYWN0aW9uLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzFiMWIyODtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG59XG5cbi5oZi1kZWxldGUtYnRuIHtcbiAgICBib3JkZXItY29sb3I6ICM1YTFmMmQ7XG4gICAgY29sb3I6ICNmZjhmYTg7XG59XG5cbi5oZi1kZWxldGUtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2ExNDIwO1xuICAgIGNvbG9yOiAjZmZjNWQzO1xufVxuXG4uaGYtZGVsZXRlLWJ0bjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC41NTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/post-tile/post-tile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/post-tile/post-tile.component.ts ***!
    \*********************************************************/

  /*! exports provided: PostTileComponent */

  /***/
  function srcAppSharedPostTilePostTileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostTileComponent", function () {
      return PostTileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PostTileComponent = /*#__PURE__*/function () {
      function PostTileComponent(router) {
        _classCallCheck(this, PostTileComponent);

        this.router = router;
        this.faComments = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faComments"];
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHeart"];
        this.faShare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faShare"];
        this.faEllipsisH = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEllipsisH"];
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlay"];
        this.faVolumeMute = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faVolumeMute"];
        this.showDeleteAction = false;
        this.deletingPostId = null;
        this.deleteRequested = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(PostTileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToPost",
        value: function goToPost(post) {
          this.router.navigateByUrl(this.getPostPath(post));
        }
      }, {
        key: "goToCommunity",
        value: function goToCommunity(post) {
          var slug = post === null || post === void 0 ? void 0 : post.communitySlug;

          if (!slug) {
            return;
          }

          this.router.navigate(['/communities', slug]);
        }
      }, {
        key: "getPostPath",
        value: function getPostPath(post) {
          var safeSubreddit = this.slugify((post === null || post === void 0 ? void 0 : post.communitySlug) || (post === null || post === void 0 ? void 0 : post.communityName) || (post === null || post === void 0 ? void 0 : post.subredditName) || 'community');
          var safeTitle = this.slugify((post === null || post === void 0 ? void 0 : post.postName) || 'post');
          return "/r/".concat(safeSubreddit, "/comments/").concat(post.id, "/").concat(safeTitle);
        }
      }, {
        key: "isVideoPost",
        value: function isVideoPost(post) {
          return !!(post === null || post === void 0 ? void 0 : post.videoUrl);
        }
      }, {
        key: "getImageUrl",
        value: function getImageUrl(post) {
          if (post === null || post === void 0 ? void 0 : post.imageUrl) {
            return post.imageUrl;
          }

          if (!(post === null || post === void 0 ? void 0 : post.url)) {
            return null;
          }

          return this.isLikelyImageUrl(post.url) ? post.url : null;
        }
      }, {
        key: "isMediaPost",
        value: function isMediaPost(post) {
          return this.isVideoPost(post) || !!this.getImageUrl(post);
        }
      }, {
        key: "isExternalLinkPost",
        value: function isExternalLinkPost(post) {
          return !!(post === null || post === void 0 ? void 0 : post.url) && !this.isLikelyImageUrl(post.url) && !(post === null || post === void 0 ? void 0 : post.imageUrl);
        }
      }, {
        key: "sharePost",
        value: function sharePost(post) {
          var _a;

          var shareUrl = "".concat(window.location.origin).concat(this.getPostPath(post));
          var webNavigator = navigator;

          if (webNavigator.share) {
            webNavigator.share({
              title: post.postName,
              url: shareUrl
            })["catch"](function () {});
            return;
          }

          if ((_a = webNavigator.clipboard) === null || _a === void 0 ? void 0 : _a.writeText) {
            webNavigator.clipboard.writeText(shareUrl)["catch"](function () {});
          }
        }
      }, {
        key: "requestDelete",
        value: function requestDelete(post) {
          this.deleteRequested.emit(post);
        }
      }, {
        key: "isDeleting",
        value: function isDeleting(post) {
          return !!post && !!this.deletingPostId && post.id === this.deletingPostId;
        }
      }, {
        key: "getCommunityLabel",
        value: function getCommunityLabel(post) {
          return (post === null || post === void 0 ? void 0 : post.communityName) || (post === null || post === void 0 ? void 0 : post.subredditName) || 'community';
        }
      }, {
        key: "slugify",
        value: function slugify(value) {
          return (value || '').toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '_').replace(/_+/g, '_').replace(/^-+|-+$/g, '') || 'post';
        }
      }, {
        key: "isLikelyImageUrl",
        value: function isLikelyImageUrl(url) {
          return /\.(png|jpe?g|gif|webp|bmp|svg|avif)(\?.*)?$/i.test(url);
        }
      }]);

      return PostTileComponent;
    }();

    PostTileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PostTileComponent.prototype, "posts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PostTileComponent.prototype, "showDeleteAction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PostTileComponent.prototype, "deletingPostId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PostTileComponent.prototype, "deleteRequested", void 0);
    PostTileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-tile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./post-tile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/post-tile/post-tile.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./post-tile.component.css */
      "./src/app/shared/post-tile/post-tile.component.css"))["default"]]
    })], PostTileComponent);
    /***/
  },

  /***/
  "./src/app/shared/post.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/post.service.ts ***!
    \****************************************/

  /*! exports provided: PostService */

  /***/
  function srcAppSharedPostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostService", function () {
      return PostService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var PostService = /*#__PURE__*/function () {
      function PostService(http) {
        _classCallCheck(this, PostService);

        this.http = http;
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl;
      }

      _createClass(PostService, [{
        key: "getAllPosts",
        value: function getAllPosts() {
          return this.http.get("".concat(this.apiBaseUrl, "/api/posts/"));
        }
      }, {
        key: "createPost",
        value: function createPost(postPayload) {
          return this.http.post("".concat(this.apiBaseUrl, "/api/posts/"), postPayload);
        }
      }, {
        key: "getPost",
        value: function getPost(id) {
          return this.http.get("".concat(this.apiBaseUrl, "/api/posts/").concat(id));
        }
      }, {
        key: "getPostsBySubreddit",
        value: function getPostsBySubreddit(id) {
          return this.http.get("".concat(this.apiBaseUrl, "/api/posts/by-subreddit/").concat(id));
        }
      }, {
        key: "getPostsByCommunity",
        value: function getPostsByCommunity(slug) {
          return this.http.get("".concat(this.apiBaseUrl, "/api/posts/by-community/").concat(slug));
        }
      }, {
        key: "getAllPostsByUser",
        value: function getAllPostsByUser(name) {
          return this.http.get("".concat(this.apiBaseUrl, "/api/posts/by-user/").concat(name));
        }
      }, {
        key: "getMyPosts",
        value: function getMyPosts() {
          return this.http.get("".concat(this.apiBaseUrl, "/api/posts/mine"));
        }
      }, {
        key: "getMyLikedPosts",
        value: function getMyLikedPosts() {
          return this.http.get("".concat(this.apiBaseUrl, "/api/posts/liked"));
        }
      }, {
        key: "deletePost",
        value: function deletePost(postId) {
          return this.http["delete"]("".concat(this.apiBaseUrl, "/api/posts/").concat(postId));
        }
      }]);

      return PostService;
    }();

    PostService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PostService);
    /***/
  },

  /***/
  "./src/app/shared/video-upload.service.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/video-upload.service.ts ***!
    \************************************************/

  /*! exports provided: VideoUploadService */

  /***/
  function srcAppSharedVideoUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoUploadService", function () {
      return VideoUploadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var VideoUploadService = /*#__PURE__*/function () {
      function VideoUploadService(http) {
        _classCallCheck(this, VideoUploadService);

        this.http = http;
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
      }

      _createClass(VideoUploadService, [{
        key: "createMediaUploadUrl",
        value: function createMediaUploadUrl(fileName, contentType, mediaType) {
          var request = {
            fileName: fileName,
            contentType: contentType,
            mediaType: mediaType
          };
          return this.http.post("".concat(this.apiBaseUrl, "/api/uploads/media/presign"), request);
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(uploadUrl, file) {
          var contentType = file.type && file.type.length > 0 ? file.type : 'application/octet-stream';
          return this.http.put(uploadUrl, file, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': contentType
            }),
            responseType: 'text'
          });
        }
      }, {
        key: "createVideoUploadUrl",
        value: function createVideoUploadUrl(fileName, contentType) {
          return this.createMediaUploadUrl(fileName, contentType, 'VIDEO').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return {
              uploadUrl: response.uploadUrl,
              videoKey: response.objectKey
            };
          }));
        }
      }, {
        key: "uploadVideo",
        value: function uploadVideo(uploadUrl, file) {
          return this.uploadFile(uploadUrl, file);
        }
      }]);

      return VideoUploadService;
    }();

    VideoUploadService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    VideoUploadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], VideoUploadService);
    /***/
  },

  /***/
  "./src/app/shared/vote-button/vote-button.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/shared/vote-button/vote-button.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedVoteButtonVoteButtonComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vote-actions {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.vote-btn {\n    border: 1px solid var(--hf-border-strong);\n    background-color: var(--hf-surface-soft);\n    color: var(--hf-text-secondary);\n    border-radius: 18px;\n    padding: 5px 9px;\n    cursor: pointer;\n    font-size: 12px;\n    display: inline-flex;\n    align-items: center;\n}\n\n.vote-btn:hover {\n    background-color: #1b1b28;\n    color: var(--hf-text);\n}\n\n.vote-btn.active.like-btn {\n    border-color: #86decf;\n    color: #86decf;\n}\n\n.vote-btn.active.dislike-btn {\n    border-color: #f08ca8;\n    color: #f08ca8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3ZvdGUtYnV0dG9uL3ZvdGUtYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyx3Q0FBd0M7SUFDeEMsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdm90ZS1idXR0b24vdm90ZS1idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52b3RlLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA2cHg7XG59XG5cbi52b3RlLWJ0biB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyLXN0cm9uZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtc3VyZmFjZS1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgcGFkZGluZzogNXB4IDlweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi52b3RlLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIyODtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG59XG5cbi52b3RlLWJ0bi5hY3RpdmUubGlrZS1idG4ge1xuICAgIGJvcmRlci1jb2xvcjogIzg2ZGVjZjtcbiAgICBjb2xvcjogIzg2ZGVjZjtcbn1cblxuLnZvdGUtYnRuLmFjdGl2ZS5kaXNsaWtlLWJ0biB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjA4Y2E4O1xuICAgIGNvbG9yOiAjZjA4Y2E4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/vote-button/vote-button.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/vote-button/vote-button.component.ts ***!
    \*************************************************************/

  /*! exports provided: VoteButtonComponent */

  /***/
  function srcAppSharedVoteButtonVoteButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoteButtonComponent", function () {
      return VoteButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _vote_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vote-type */
    "./src/app/shared/vote-button/vote-type.ts");
    /* harmony import */


    var _vote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../vote.service */
    "./src/app/shared/vote.service.ts");
    /* harmony import */


    var src_app_auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/auth/shared/auth.service */
    "./src/app/auth/shared/auth.service.ts");
    /* harmony import */


    var _post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../post.service */
    "./src/app/shared/post.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var VoteButtonComponent = /*#__PURE__*/function () {
      function VoteButtonComponent(voteService, authService, postService, toastr) {
        _classCallCheck(this, VoteButtonComponent);

        this.voteService = voteService;
        this.authService = authService;
        this.postService = postService;
        this.toastr = toastr;
        this.faThumbsUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faThumbsUp"];
        this.faThumbsDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faThumbsDown"];
        this.votePayload = {
          voteType: undefined,
          postId: undefined
        };
        this.isLoggedIn = this.authService.isLoggedIn();
      }

      _createClass(VoteButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this34 = this;

          this.updateVoteDetails();
          this.authSubscription = this.authService.loggedIn.subscribe(function (data) {
            _this34.isLoggedIn = data;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _a;

          (_a = this.authSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        }
      }, {
        key: "upvotePost",
        value: function upvotePost() {
          this.votePayload.voteType = _vote_type__WEBPACK_IMPORTED_MODULE_3__["VoteType"].UPVOTE;
          this.vote();
        }
      }, {
        key: "downvotePost",
        value: function downvotePost() {
          this.votePayload.voteType = _vote_type__WEBPACK_IMPORTED_MODULE_3__["VoteType"].DOWNVOTE;
          this.vote();
        }
      }, {
        key: "vote",
        value: function vote() {
          var _this35 = this;

          this.votePayload.postId = this.post.id;
          this.voteService.vote(this.votePayload).subscribe({
            next: function next() {
              _this35.updateVoteDetails();
            },
            error: function error(_error15) {
              var _a;

              _this35.toastr.error(((_a = _error15 === null || _error15 === void 0 ? void 0 : _error15.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to submit vote');
            }
          });
        }
      }, {
        key: "updateVoteDetails",
        value: function updateVoteDetails() {
          var _this36 = this;

          this.postService.getPost(this.post.id).subscribe(function (post) {
            _this36.post = post;
          });
        }
      }]);

      return VoteButtonComponent;
    }();

    VoteButtonComponent.ctorParameters = function () {
      return [{
        type: _vote_service__WEBPACK_IMPORTED_MODULE_4__["VoteService"]
      }, {
        type: src_app_auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], VoteButtonComponent.prototype, "post", void 0);
    VoteButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vote-button',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./vote-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/vote-button/vote-button.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./vote-button.component.css */
      "./src/app/shared/vote-button/vote-button.component.css"))["default"]]
    })], VoteButtonComponent);
    /***/
  },

  /***/
  "./src/app/shared/vote-button/vote-type.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/vote-button/vote-type.ts ***!
    \*************************************************/

  /*! exports provided: VoteType */

  /***/
  function srcAppSharedVoteButtonVoteTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoteType", function () {
      return VoteType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var VoteType;

    (function (VoteType) {
      VoteType[VoteType["UPVOTE"] = 0] = "UPVOTE";
      VoteType[VoteType["DOWNVOTE"] = 1] = "DOWNVOTE";
    })(VoteType || (VoteType = {}));
    /***/

  },

  /***/
  "./src/app/shared/vote.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/vote.service.ts ***!
    \****************************************/

  /*! exports provided: VoteService */

  /***/
  function srcAppSharedVoteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoteService", function () {
      return VoteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var VoteService = /*#__PURE__*/function () {
      function VoteService(http) {
        _classCallCheck(this, VoteService);

        this.http = http;
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl;
      }

      _createClass(VoteService, [{
        key: "vote",
        value: function vote(votePayload) {
          return this.http.post("".concat(this.apiBaseUrl, "/api/votes/"), votePayload);
        }
      }]);

      return VoteService;
    }();

    VoteService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    VoteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], VoteService);
    /***/
  },

  /***/
  "./src/app/subreddit/create-subreddit/create-subreddit.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/subreddit/create-subreddit/create-subreddit.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSubredditCreateSubredditCreateSubredditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".create-subreddit-main {\n  max-width: 980px;\n  margin: 0 auto;\n}\n\n.create-subreddit-container {\n  margin-top: 10px;\n  border: 1px solid var(--hf-border);\n  margin-bottom: 10px;\n  overflow: hidden;\n  background-color: var(--hf-surface);\n  color: var(--hf-text-secondary);\n  position: relative;\n  border-radius: 10px;\n  box-shadow: var(--hf-shadow);\n  padding: 10px;\n}\n\n.create-subreddit-heading {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 22px;\n  color: var(--hf-text);\n}\n\n.btnCreateSubreddit {\n  background-color: var(--hf-surface-soft);\n  border-color: var(--hf-border-strong);\n  color: var(--hf-text);\n  border: 1px solid;\n  border-radius: 999px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .5px;\n  line-height: 24px;\n  text-transform: uppercase;\n  padding: 3px 18px;\n  min-width: 140px;\n  height: 36px;\n  margin-left: 8px;\n}\n\n.btnCreateSubreddit:hover {\n  background-color: #1b1b28;\n}\n\n.btnDiscard {\n  border: 1px solid var(--hf-border-strong);\n  border-radius: 999px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .5px;\n  line-height: 24px;\n  text-transform: uppercase;\n  padding: 3px 18px;\n  min-width: 140px;\n  height: 36px;\n  margin-top: 5px;\n  color: var(--hf-text-secondary);\n  background-color: transparent;\n}\n\n.btnDiscard:hover {\n  background-color: #1a1a24;\n  color: var(--hf-text);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VicmVkZGl0L2NyZWF0ZS1zdWJyZWRkaXQvY3JlYXRlLXN1YnJlZGRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zdWJyZWRkaXQvY3JlYXRlLXN1YnJlZGRpdC9jcmVhdGUtc3VicmVkZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLXN1YnJlZGRpdC1tYWluIHtcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jcmVhdGUtc3VicmVkZGl0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlcik7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLXN1cmZhY2UpO1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWhmLXNoYWRvdyk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jcmVhdGUtc3VicmVkZGl0LWhlYWRpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG59XG5cbi5idG5DcmVhdGVTdWJyZWRkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1zdXJmYWNlLXNvZnQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWhmLWJvcmRlci1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAzcHggMThweDtcbiAgbWluLXdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uYnRuQ3JlYXRlU3VicmVkZGl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIyODtcbn1cblxuLmJ0bkRpc2NhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXItc3Ryb25nKTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogM3B4IDE4cHg7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ0bkRpc2NhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTI0O1xuICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/subreddit/create-subreddit/create-subreddit.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/subreddit/create-subreddit/create-subreddit.component.ts ***!
    \**************************************************************************/

  /*! exports provided: CreateSubredditComponent */

  /***/
  function srcAppSubredditCreateSubredditCreateSubredditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateSubredditComponent", function () {
      return CreateSubredditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_community_community_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/community/community.service */
    "./src/app/community/community.service.ts");

    var CreateSubredditComponent = /*#__PURE__*/function () {
      function CreateSubredditComponent(router, toastr, communityService) {
        _classCallCheck(this, CreateSubredditComponent);

        this.router = router;
        this.toastr = toastr;
        this.communityService = communityService;
        this.createSubredditForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
      }

      _createClass(CreateSubredditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "discard",
        value: function discard() {
          this.router.navigateByUrl('/');
        }
      }, {
        key: "createSubreddit",
        value: function createSubreddit() {
          var _this37 = this;

          var _a, _b;

          if (this.createSubredditForm.invalid) {
            this.createSubredditForm.markAllAsTouched();
            return;
          }

          var payload = {
            name: (((_a = this.createSubredditForm.get('title')) === null || _a === void 0 ? void 0 : _a.value) || '').trim(),
            description: (((_b = this.createSubredditForm.get('description')) === null || _b === void 0 ? void 0 : _b.value) || '').trim()
          };
          this.communityService.createCommunity(payload).subscribe({
            next: function next(community) {
              _this37.toastr.success('Community created');

              _this37.router.navigate(['/communities', community.slug]);
            },
            error: function error(_error16) {
              var _a;

              _this37.toastr.error(((_a = _error16 === null || _error16 === void 0 ? void 0 : _error16.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to create community');
            }
          });
        }
      }]);

      return CreateSubredditComponent;
    }();

    CreateSubredditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: src_app_community_community_service__WEBPACK_IMPORTED_MODULE_5__["CommunityService"]
      }];
    };

    CreateSubredditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-subreddit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-subreddit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/create-subreddit/create-subreddit.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-subreddit.component.css */
      "./src/app/subreddit/create-subreddit/create-subreddit.component.css"))["default"]]
    })], CreateSubredditComponent);
    /***/
  },

  /***/
  "./src/app/subreddit/list-subreddits/list-subreddits.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/subreddit/list-subreddits/list-subreddits.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSubredditListSubredditsListSubredditsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list-subreddits-main {\n  max-width: 980px;\n  margin: 0 auto;\n  border: 1px solid var(--hf-border);\n  border-radius: 10px;\n  background: var(--hf-surface);\n  padding: 16px;\n  box-shadow: var(--hf-shadow);\n}\n\n.list-subreddits-main h2 {\n  color: var(--hf-text);\n  margin-bottom: 12px;\n}\n\n.list-subreddits-main ul {\n  margin: 0;\n  padding-left: 20px;\n}\n\n.list-subreddits-main li {\n  color: var(--hf-text-secondary);\n  margin-bottom: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VicmVkZGl0L2xpc3Qtc3VicmVkZGl0cy9saXN0LXN1YnJlZGRpdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3N1YnJlZGRpdC9saXN0LXN1YnJlZGRpdHMvbGlzdC1zdWJyZWRkaXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1zdWJyZWRkaXRzLW1haW4ge1xuICBtYXgtd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGYtc3VyZmFjZSk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWhmLXNoYWRvdyk7XG59XG5cbi5saXN0LXN1YnJlZGRpdHMtbWFpbiBoMiB7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmxpc3Qtc3VicmVkZGl0cy1tYWluIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5saXN0LXN1YnJlZGRpdHMtbWFpbiBsaSB7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/subreddit/list-subreddits/list-subreddits.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/subreddit/list-subreddits/list-subreddits.component.ts ***!
    \************************************************************************/

  /*! exports provided: ListSubredditsComponent */

  /***/
  function srcAppSubredditListSubredditsListSubredditsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListSubredditsComponent", function () {
      return ListSubredditsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _subreddit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../subreddit.service */
    "./src/app/subreddit/subreddit.service.ts");

    var ListSubredditsComponent = /*#__PURE__*/function () {
      function ListSubredditsComponent(subredditService) {
        _classCallCheck(this, ListSubredditsComponent);

        this.subredditService = subredditService;
        this.subreddits = [];
      }

      _createClass(ListSubredditsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;

          this.subredditService.getAllSubreddits().subscribe({
            next: function next(data) {
              _this38.subreddits = data || [];
            },
            error: function error() {
              _this38.subreddits = [];
            }
          });
        }
      }]);

      return ListSubredditsComponent;
    }();

    ListSubredditsComponent.ctorParameters = function () {
      return [{
        type: _subreddit_service__WEBPACK_IMPORTED_MODULE_2__["SubredditService"]
      }];
    };

    ListSubredditsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-subreddits',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list-subreddits.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/list-subreddits/list-subreddits.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list-subreddits.component.css */
      "./src/app/subreddit/list-subreddits/list-subreddits.component.css"))["default"]]
    })], ListSubredditsComponent);
    /***/
  },

  /***/
  "./src/app/subreddit/subreddit.service.ts":
  /*!************************************************!*\
    !*** ./src/app/subreddit/subreddit.service.ts ***!
    \************************************************/

  /*! exports provided: SubredditService */

  /***/
  function srcAppSubredditSubredditServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubredditService", function () {
      return SubredditService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var SubredditService = /*#__PURE__*/function () {
      function SubredditService(http) {
        _classCallCheck(this, SubredditService);

        this.http = http;
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl;
      }

      _createClass(SubredditService, [{
        key: "getAllSubreddits",
        value: function getAllSubreddits() {
          return this.http.get("".concat(this.apiBaseUrl, "/api/subreddit"));
        }
      }, {
        key: "createSubreddit",
        value: function createSubreddit(subredditModel) {
          return this.http.post("".concat(this.apiBaseUrl, "/api/subreddit"), subredditModel);
        }
      }]);

      return SubredditService;
    }();

    SubredditService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SubredditService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SubredditService);
    /***/
  },

  /***/
  "./src/app/token-interceptor.ts":
  /*!**************************************!*\
    !*** ./src/app/token-interceptor.ts ***!
    \**************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/shared/auth.service */
    "./src/app/auth/shared/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor(authService) {
        _classCallCheck(this, TokenInterceptor);

        this.authService = authService;
        this.isTokenRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this39 = this;

          // Presigned S3 uploads must not include app JWT headers.
          if (!this.isApiRequest(req.url)) {
            return next.handle(req);
          }

          if (req.url.indexOf('refresh') !== -1 || req.url.indexOf('login') !== -1) {
            return next.handle(req);
          }

          var jwtToken = this.authService.getJwtToken();

          if (jwtToken) {
            return next.handle(this.addToken(req, jwtToken)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && error.status === 403) {
                return _this39.handleAuthErrors(req, next);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
          }

          return next.handle(req);
        }
      }, {
        key: "isApiRequest",
        value: function isApiRequest(url) {
          if (!url) {
            return false;
          }

          if (url.startsWith('/api/')) {
            return true;
          }

          if (_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiBaseUrl && _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiBaseUrl.length > 0) {
            return url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiBaseUrl + '/api/');
          }

          return false;
        }
      }, {
        key: "handleAuthErrors",
        value: function handleAuthErrors(req, next) {
          var _this40 = this;

          if (!this.isTokenRefreshing) {
            this.isTokenRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (refreshTokenResponse) {
              _this40.isTokenRefreshing = false;

              _this40.refreshTokenSubject.next(refreshTokenResponse.authenticationToken);

              return next.handle(_this40.addToken(req, refreshTokenResponse.authenticationToken));
            }));
          }

          return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (result) {
            return result !== null;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return next.handle(_this40.addToken(req, _this40.authService.getJwtToken()));
          }));
        }
      }, {
        key: "addToken",
        value: function addToken(req, jwtToken) {
          return req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + jwtToken)
          });
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ctorParameters = function () {
      return [{
        type: _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TokenInterceptor);
    /***/
  },

  /***/
  "./src/app/topics/my-comments/my-comments.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/topics/my-comments/my-comments.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTopicsMyCommentsMyCommentsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-comments-page {\n  width: 100%;\n  padding: 0 0 16px;\n}\n\n.my-comments-page h2 {\n  margin-bottom: 12px;\n}\n\n.my-comments-list {\n  display: grid;\n  gap: 10px;\n}\n\n.my-comment-card {\n  border: 1px solid var(--hf-border);\n  border-radius: 12px;\n  background: var(--hf-surface);\n  box-shadow: var(--hf-shadow);\n  padding: 12px;\n}\n\n.my-comment-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.my-comment-topic {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.my-comment-stance {\n  border-radius: 999px;\n  padding: 2px 8px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  border: 1px solid transparent;\n}\n\n.my-comment-stance.pro {\n  border-color: #93cefb;\n  background: rgba(147, 206, 251, 0.2);\n  color: #d6efff;\n}\n\n.my-comment-stance.con {\n  border-color: #ff8ea1;\n  background: rgba(255, 142, 161, 0.18);\n  color: #ffd1dc;\n}\n\n.my-comment-topic-link {\n  border: none;\n  background: transparent;\n  color: #9cc8ff;\n  font-size: 13px;\n  padding: 0;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.my-comment-topic-link:hover,\n.my-comment-topic-link:focus {\n  color: #c7ddff;\n  outline: none;\n}\n\n.my-comment-time {\n  color: var(--hf-text-muted);\n  font-size: 12px;\n}\n\n.my-comment-month {\n  margin: 8px 0 0;\n  color: var(--hf-text-muted);\n  font-size: 12px;\n}\n\n.my-comment-text {\n  margin: 8px 0;\n  color: var(--hf-text-secondary);\n  white-space: pre-wrap;\n}\n\n.my-comment-actions {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.my-comment-delete {\n  border: 1px solid rgba(255, 142, 161, 0.5);\n  border-radius: 999px;\n  background: transparent;\n  color: #ffd1dc;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 12px;\n  cursor: pointer;\n}\n\n.my-comment-delete:hover,\n.my-comment-delete:focus {\n  background: rgba(255, 142, 161, 0.16);\n  outline: none;\n}\n\n.my-comment-delete:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9waWNzL215LWNvbW1lbnRzL215LWNvbW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtFQUNmLFVBQVU7RUFDVixlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHFDQUFxQztFQUNyQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvdG9waWNzL215LWNvbW1lbnRzL215LWNvbW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY29tbWVudHMtcGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMTZweDtcbn1cblxuLm15LWNvbW1lbnRzLXBhZ2UgaDIge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ubXktY29tbWVudHMtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTBweDtcbn1cblxuLm15LWNvbW1lbnQtY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhmLXN1cmZhY2UpO1xuICBib3gtc2hhZG93OiB2YXIoLS1oZi1zaGFkb3cpO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4ubXktY29tbWVudC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG59XG5cbi5teS1jb21tZW50LXRvcGljIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5teS1jb21tZW50LXN0YW5jZSB7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubXktY29tbWVudC1zdGFuY2UucHJvIHtcbiAgYm9yZGVyLWNvbG9yOiAjOTNjZWZiO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0NywgMjA2LCAyNTEsIDAuMik7XG4gIGNvbG9yOiAjZDZlZmZmO1xufVxuXG4ubXktY29tbWVudC1zdGFuY2UuY29uIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY4ZWExO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTQyLCAxNjEsIDAuMTgpO1xuICBjb2xvcjogI2ZmZDFkYztcbn1cblxuLm15LWNvbW1lbnQtdG9waWMtbGluayB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjOWNjOGZmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5teS1jb21tZW50LXRvcGljLWxpbms6aG92ZXIsXG4ubXktY29tbWVudC10b3BpYy1saW5rOmZvY3VzIHtcbiAgY29sb3I6ICNjN2RkZmY7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5teS1jb21tZW50LXRpbWUge1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm15LWNvbW1lbnQtbW9udGgge1xuICBtYXJnaW46IDhweCAwIDA7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubXktY29tbWVudC10ZXh0IHtcbiAgbWFyZ2luOiA4cHggMDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4ubXktY29tbWVudC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLm15LWNvbW1lbnQtZGVsZXRlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDE0MiwgMTYxLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZkMWRjO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5teS1jb21tZW50LWRlbGV0ZTpob3Zlcixcbi5teS1jb21tZW50LWRlbGV0ZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNDIsIDE2MSwgMC4xNik7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5teS1jb21tZW50LWRlbGV0ZTpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNjU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/topics/my-comments/my-comments.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/topics/my-comments/my-comments.component.ts ***!
    \*************************************************************/

  /*! exports provided: MyCommentsComponent */

  /***/
  function srcAppTopicsMyCommentsMyCommentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCommentsComponent", function () {
      return MyCommentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _topic_discussion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../topic-discussion.service */
    "./src/app/topics/topic-discussion.service.ts");

    var MyCommentsComponent = /*#__PURE__*/function () {
      function MyCommentsComponent(topicDiscussionService, router, toastr) {
        _classCallCheck(this, MyCommentsComponent);

        this.topicDiscussionService = topicDiscussionService;
        this.router = router;
        this.toastr = toastr;
        this.comments = [];
        this.loading = true;
        this.deletingCommentId = null;
        this.selectedDomain = 'all';
      }

      _createClass(MyCommentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadComments();
        }
      }, {
        key: "deleteComment",
        value: function deleteComment(comment) {
          var _this41 = this;

          if (!(comment === null || comment === void 0 ? void 0 : comment.id) || this.deletingCommentId) {
            return;
          }

          var confirmed = window.confirm('Delete this comment? This action cannot be undone.');

          if (!confirmed) {
            return;
          }

          this.deletingCommentId = comment.id;
          this.topicDiscussionService.deleteComment(comment.id).subscribe({
            next: function next() {
              _this41.comments = _this41.comments.filter(function (item) {
                return item.id !== comment.id;
              });
              _this41.deletingCommentId = null;

              _this41.toastr.success('Comment deleted');
            },
            error: function error(_error17) {
              var _a;

              _this41.deletingCommentId = null;

              _this41.toastr.error(((_a = _error17 === null || _error17 === void 0 ? void 0 : _error17.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to delete comment');
            }
          });
        }
      }, {
        key: "goToTopic",
        value: function goToTopic(comment) {
          if (!(comment === null || comment === void 0 ? void 0 : comment.topicSlug)) {
            return;
          }

          this.router.navigate(['/topics', comment.topicSlug]);
        }
      }, {
        key: "onSidebarDomainSelected",
        value: function onSidebarDomainSelected(domain) {
          this.navigateToHomeDomain(domain);
        }
      }, {
        key: "trackByComment",
        value: function trackByComment(index, item) {
          return item.id || index;
        }
      }, {
        key: "navigateToHomeDomain",
        value: function navigateToHomeDomain(domain) {
          this.selectedDomain = domain;

          if (domain === 'all') {
            this.router.navigate(['/']);
            return;
          }

          this.router.navigate(['/'], {
            queryParams: {
              domain: domain
            }
          });
        }
      }, {
        key: "loadComments",
        value: function loadComments() {
          var _this42 = this;

          this.topicDiscussionService.getMyComments().subscribe({
            next: function next(comments) {
              _this42.comments = comments || [];
              _this42.loading = false;
            },
            error: function error(_error18) {
              var _a;

              _this42.loading = false;

              _this42.toastr.error(((_a = _error18 === null || _error18 === void 0 ? void 0 : _error18.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to load your comments');
            }
          });
        }
      }]);

      return MyCommentsComponent;
    }();

    MyCommentsComponent.ctorParameters = function () {
      return [{
        type: _topic_discussion_service__WEBPACK_IMPORTED_MODULE_4__["TopicDiscussionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    MyCommentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-comments',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-comments.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/topics/my-comments/my-comments.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-comments.component.css */
      "./src/app/topics/my-comments/my-comments.component.css"))["default"]]
    })], MyCommentsComponent);
    /***/
  },

  /***/
  "./src/app/topics/topic-comment-thread/topic-comment-thread.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/topics/topic-comment-thread/topic-comment-thread.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTopicsTopicCommentThreadTopicCommentThreadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".thread-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.thread-item {\n  margin-top: 10px;\n}\n\n.comment-card {\n  border: 1px solid var(--hf-border);\n  border-left: 3px solid var(--hf-border);\n  border-radius: 10px;\n  background: #12121a;\n  padding: 10px;\n}\n\n.comment-card.pro {\n  border-left-color: #93cefb;\n}\n\n.comment-card.con {\n  border-left-color: #ff8ea1;\n}\n\n.comment-card header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 8px;\n}\n\n.comment-head-left {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n\n.comment-user {\n  color: var(--hf-text);\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.comment-time {\n  color: var(--hf-text-muted);\n  font-size: 12px;\n}\n\n.comment-stance {\n  border-radius: 999px;\n  padding: 2px 8px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  border: 1px solid transparent;\n}\n\n.comment-stance.pro {\n  border-color: #93cefb;\n  background: rgba(147, 206, 251, 0.2);\n  color: #d6efff;\n}\n\n.comment-stance.con {\n  border-color: #ff8ea1;\n  background: rgba(255, 142, 161, 0.18);\n  color: #ffd1dc;\n}\n\n.comment-text {\n  margin: 8px 0;\n  color: var(--hf-text-secondary);\n  white-space: pre-wrap;\n}\n\n.comment-actions {\n  display: flex;\n  gap: 8px;\n}\n\n.comment-btn {\n  border: 1px solid var(--hf-border-strong);\n  border-radius: 999px;\n  background: transparent;\n  color: var(--hf-text-secondary);\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 10px;\n  cursor: pointer;\n}\n\n.comment-btn:hover,\n.comment-btn:focus {\n  background: #1f1f2b;\n  color: var(--hf-text);\n  outline: none;\n  box-shadow: var(--hf-focus-ring);\n}\n\n.comment-btn.active {\n  border-color: #93cefb;\n  color: var(--hf-text);\n}\n\n.comment-btn.primary {\n  align-self: flex-end;\n  background: #1c1c28;\n  color: var(--hf-text);\n}\n\n.comment-btn.danger {\n  border-color: rgba(255, 142, 161, 0.5);\n  color: #ffd1dc;\n}\n\n.comment-btn.danger:hover,\n.comment-btn.danger:focus {\n  background: rgba(255, 142, 161, 0.16);\n}\n\n.comment-btn:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n\n.reply-editor {\n  margin-top: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.reply-stance-selector {\n  display: inline-flex;\n  gap: 8px;\n}\n\n.comment-btn.stance {\n  padding: 5px 11px;\n}\n\n.comment-btn.stance.pro.active {\n  border-color: #93cefb;\n  background: rgba(147, 206, 251, 0.18);\n  color: #d9f1ff;\n}\n\n.comment-btn.stance.con.active {\n  border-color: #ff8ea1;\n  background: rgba(255, 142, 161, 0.16);\n  color: #ffd2dc;\n}\n\n.reply-editor textarea {\n  width: 100%;\n  min-height: 70px;\n  resize: vertical;\n  border-radius: 10px;\n  padding: 8px 10px;\n  background: #0f0f16;\n  border: 1px solid var(--hf-border);\n  color: var(--hf-text);\n}\n\n.reply-thread {\n  display: block;\n  margin-left: 22px;\n  padding-left: 10px;\n  border-left: 1px solid var(--hf-border);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9waWNzL3RvcGljLWNvbW1lbnQtdGhyZWFkL3RvcGljLWNvbW1lbnQtdGhyZWFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUNBQXVDO0FBQ3pDIiwiZmlsZSI6InNyYy9hcHAvdG9waWNzL3RvcGljLWNvbW1lbnQtdGhyZWFkL3RvcGljLWNvbW1lbnQtdGhyZWFkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhyZWFkLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50aHJlYWQtaXRlbSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jb21tZW50LWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWhmLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMxMjEyMWE7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb21tZW50LWNhcmQucHJvIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM5M2NlZmI7XG59XG5cbi5jb21tZW50LWNhcmQuY29uIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZjhlYTE7XG59XG5cbi5jb21tZW50LWNhcmQgaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGdhcDogOHB4O1xufVxuXG4uY29tbWVudC1oZWFkLWxlZnQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmNvbW1lbnQtdXNlciB7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uY29tbWVudC10aW1lIHtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb21tZW50LXN0YW5jZSB7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uY29tbWVudC1zdGFuY2UucHJvIHtcbiAgYm9yZGVyLWNvbG9yOiAjOTNjZWZiO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0NywgMjA2LCAyNTEsIDAuMik7XG4gIGNvbG9yOiAjZDZlZmZmO1xufVxuXG4uY29tbWVudC1zdGFuY2UuY29uIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY4ZWExO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTQyLCAxNjEsIDAuMTgpO1xuICBjb2xvcjogI2ZmZDFkYztcbn1cblxuLmNvbW1lbnQtdGV4dCB7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLmNvbW1lbnQtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xufVxuXG4uY29tbWVudC1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXItc3Ryb25nKTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb21tZW50LWJ0bjpob3Zlcixcbi5jb21tZW50LWJ0bjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMxZjFmMmI7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogdmFyKC0taGYtZm9jdXMtcmluZyk7XG59XG5cbi5jb21tZW50LWJ0bi5hY3RpdmUge1xuICBib3JkZXItY29sb3I6ICM5M2NlZmI7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbn1cblxuLmNvbW1lbnQtYnRuLnByaW1hcnkge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZDogIzFjMWMyODtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xufVxuXG4uY29tbWVudC1idG4uZGFuZ2VyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMTQyLCAxNjEsIDAuNSk7XG4gIGNvbG9yOiAjZmZkMWRjO1xufVxuXG4uY29tbWVudC1idG4uZGFuZ2VyOmhvdmVyLFxuLmNvbW1lbnQtYnRuLmRhbmdlcjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNDIsIDE2MSwgMC4xNik7XG59XG5cbi5jb21tZW50LWJ0bjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNjU7XG59XG5cbi5yZXBseS1lZGl0b3Ige1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4ucmVwbHktc3RhbmNlLXNlbGVjdG9yIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGdhcDogOHB4O1xufVxuXG4uY29tbWVudC1idG4uc3RhbmNlIHtcbiAgcGFkZGluZzogNXB4IDExcHg7XG59XG5cbi5jb21tZW50LWJ0bi5zdGFuY2UucHJvLmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzkzY2VmYjtcbiAgYmFja2dyb3VuZDogcmdiYSgxNDcsIDIwNiwgMjUxLCAwLjE4KTtcbiAgY29sb3I6ICNkOWYxZmY7XG59XG5cbi5jb21tZW50LWJ0bi5zdGFuY2UuY29uLmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2ZmOGVhMTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MiwgMTYxLCAwLjE2KTtcbiAgY29sb3I6ICNmZmQyZGM7XG59XG5cbi5yZXBseS1lZGl0b3IgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNzBweDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwZjBmMTY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlcik7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbn1cblxuLnJlcGx5LXRocmVhZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMjJweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlcik7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/topics/topic-comment-thread/topic-comment-thread.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/topics/topic-comment-thread/topic-comment-thread.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: TopicCommentThreadComponent */

  /***/
  function srcAppTopicsTopicCommentThreadTopicCommentThreadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopicCommentThreadComponent", function () {
      return TopicCommentThreadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _topic_discussion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../topic-discussion.service */
    "./src/app/topics/topic-discussion.service.ts");

    var TopicCommentThreadComponent = /*#__PURE__*/function () {
      function TopicCommentThreadComponent(topicDiscussionService, toastr) {
        _classCallCheck(this, TopicCommentThreadComponent);

        this.topicDiscussionService = topicDiscussionService;
        this.toastr = toastr;
        this.comments = [];
        this.isLoggedIn = false;
        this.currentUsername = '';
        this.threadUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.replyOpenMap = {};
        this.replyTextMap = {};
        this.replyStanceMap = {};
        this.deletingCommentMap = {};
      }

      _createClass(TopicCommentThreadComponent, [{
        key: "toggleReply",
        value: function toggleReply(commentId) {
          var isOpen = !this.replyOpenMap[commentId];
          this.replyOpenMap[commentId] = isOpen;

          if (!isOpen) {
            return;
          }

          var targetComment = this.comments.find(function (comment) {
            return comment.id === commentId;
          });
          this.replyStanceMap[commentId] = (targetComment === null || targetComment === void 0 ? void 0 : targetComment.stance) || 'PRO';
        }
      }, {
        key: "setReplyStance",
        value: function setReplyStance(commentId, stance) {
          this.replyStanceMap[commentId] = stance;
        }
      }, {
        key: "submitReply",
        value: function submitReply(comment) {
          var _this43 = this;

          if (!this.isLoggedIn) {
            this.toastr.warning('Please log in to reply');
            return;
          }

          var raw = this.replyTextMap[comment.id] || '';
          var text = raw.trim();

          if (!text) {
            this.toastr.warning('Reply cannot be empty');
            return;
          }

          var stance = this.replyStanceMap[comment.id] || comment.stance || 'PRO';
          this.topicDiscussionService.addComment(this.topicId, {
            text: text,
            stance: stance,
            parentCommentId: comment.id
          }).subscribe({
            next: function next() {
              _this43.replyTextMap[comment.id] = '';
              _this43.replyStanceMap[comment.id] = comment.stance || 'PRO';
              _this43.replyOpenMap[comment.id] = false;

              _this43.threadUpdated.emit();
            },
            error: function error(_error19) {
              var _a;

              _this43.toastr.error(((_a = _error19 === null || _error19 === void 0 ? void 0 : _error19.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to post reply');
            }
          });
        }
      }, {
        key: "toggleCommentUpvote",
        value: function toggleCommentUpvote(comment) {
          var _this44 = this;

          if (!this.isLoggedIn) {
            this.toastr.warning('Please log in to upvote comments');
            return;
          }

          this.topicDiscussionService.toggleCommentUpvote(comment.id).subscribe({
            next: function next(response) {
              var _a;

              comment.upvoteCount = (_a = response === null || response === void 0 ? void 0 : response.upvoteCount) !== null && _a !== void 0 ? _a : comment.upvoteCount;
              comment.upVotedByCurrentUser = !!(response === null || response === void 0 ? void 0 : response.upVotedByCurrentUser);

              _this44.sortComments(_this44.comments);
            },
            error: function error(_error20) {
              var _a;

              _this44.toastr.error(((_a = _error20 === null || _error20 === void 0 ? void 0 : _error20.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to update upvote');
            }
          });
        }
      }, {
        key: "deleteComment",
        value: function deleteComment(comment) {
          var _this45 = this;

          if (!this.isLoggedIn) {
            this.toastr.warning('Please log in to delete comments');
            return;
          }

          if (!this.canDeleteComment(comment)) {
            this.toastr.error('You can only delete your own comment');
            return;
          }

          if (this.deletingCommentMap[comment.id]) {
            return;
          }

          this.deletingCommentMap[comment.id] = true;
          this.topicDiscussionService.deleteComment(comment.id).subscribe({
            next: function next() {
              _this45.removeCommentLocally(comment);

              _this45.deletingCommentMap[comment.id] = false;
            },
            error: function error(_error21) {
              var _a;

              _this45.deletingCommentMap[comment.id] = false;

              _this45.toastr.error(((_a = _error21 === null || _error21 === void 0 ? void 0 : _error21.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to delete comment');
            }
          });
        }
      }, {
        key: "canDeleteComment",
        value: function canDeleteComment(comment) {
          if (typeof (comment === null || comment === void 0 ? void 0 : comment.ownedByCurrentUser) === 'boolean') {
            return comment.ownedByCurrentUser;
          }

          var current = (this.currentUsername || '').trim().toLowerCase();
          var author = ((comment === null || comment === void 0 ? void 0 : comment.userName) || '').trim().toLowerCase();
          return !!current && current === author;
        }
      }, {
        key: "isDeletingComment",
        value: function isDeletingComment(commentId) {
          return !!this.deletingCommentMap[commentId];
        }
      }, {
        key: "onNestedThreadUpdated",
        value: function onNestedThreadUpdated() {
          this.threadUpdated.emit();
        }
      }, {
        key: "trackByComment",
        value: function trackByComment(index, item) {
          return item.id || index;
        }
      }, {
        key: "getStanceClass",
        value: function getStanceClass(stance) {
          return stance === 'CON' ? 'con' : 'pro';
        }
      }, {
        key: "removeCommentLocally",
        value: function removeCommentLocally(comment) {
          var _this$comments;

          var index = this.comments.findIndex(function (item) {
            return item.id === comment.id;
          });

          if (index < 0) {
            return;
          }

          var promotedReplies = _toConsumableArray(comment.replies || []);

          (_this$comments = this.comments).splice.apply(_this$comments, [index, 1].concat(_toConsumableArray(promotedReplies)));

          this.sortComments(this.comments);
        }
      }, {
        key: "sortComments",
        value: function sortComments(comments) {
          var _this46 = this;

          comments.sort(function (first, second) {
            var upvoteDifference = ((second === null || second === void 0 ? void 0 : second.upvoteCount) || 0) - ((first === null || first === void 0 ? void 0 : first.upvoteCount) || 0);

            if (upvoteDifference !== 0) {
              return upvoteDifference;
            }

            return _this46.getCommentTimestamp(second) - _this46.getCommentTimestamp(first);
          });
        }
      }, {
        key: "getCommentTimestamp",
        value: function getCommentTimestamp(comment) {
          var parsed = Date.parse((comment === null || comment === void 0 ? void 0 : comment.createdDate) || '');
          return Number.isNaN(parsed) ? 0 : parsed;
        }
      }]);

      return TopicCommentThreadComponent;
    }();

    TopicCommentThreadComponent.ctorParameters = function () {
      return [{
        type: _topic_discussion_service__WEBPACK_IMPORTED_MODULE_3__["TopicDiscussionService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TopicCommentThreadComponent.prototype, "topicId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TopicCommentThreadComponent.prototype, "comments", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TopicCommentThreadComponent.prototype, "isLoggedIn", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TopicCommentThreadComponent.prototype, "currentUsername", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TopicCommentThreadComponent.prototype, "threadUpdated", void 0);
    TopicCommentThreadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-topic-comment-thread',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./topic-comment-thread.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/topics/topic-comment-thread/topic-comment-thread.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./topic-comment-thread.component.css */
      "./src/app/topics/topic-comment-thread/topic-comment-thread.component.css"))["default"]]
    })], TopicCommentThreadComponent);
    /***/
  },

  /***/
  "./src/app/topics/topic-discussion.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/topics/topic-discussion.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTopicsTopicDiscussionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".topic-page {\n  width: 100%;\n  padding: 0 0 22px;\n  color: var(--hf-text-secondary);\n}\n\n.topic-hero {\n  border: 1px solid var(--hf-border);\n  border-radius: 14px;\n  background: var(--hf-surface);\n  box-shadow: var(--hf-shadow);\n  padding: 20px;\n}\n\n.topic-kicker {\n  margin: 0;\n  font-size: 12px;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--hf-text-muted);\n}\n\n.topic-title {\n  margin: 8px 0 6px;\n  font-size: clamp(32px, 5vw, 48px);\n  line-height: 1.1;\n  font-weight: 800;\n  color: var(--hf-text);\n  background: linear-gradient(90deg, #86DECF 0%, #93CEFB 45%, #BCB6FB 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  color: transparent;\n}\n\n.topic-month {\n  margin: 0;\n  color: var(--hf-text-secondary);\n  font-size: 16px;\n}\n\n.topic-subdivisions,\n.topic-voting,\n.topic-passage {\n  margin-top: 12px;\n  border: 1px solid var(--hf-border);\n  border-radius: 14px;\n  background: var(--hf-surface);\n  box-shadow: var(--hf-shadow);\n  padding: 16px;\n}\n\n.topic-subdivisions h2,\n.topic-voting h2,\n.topic-passage h2,\n.topic-comments-section h3 {\n  margin: 0 0 10px;\n  color: var(--hf-text);\n  font-size: 18px;\n}\n\n.topic-hero-month {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.topic-month-cta {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.topic-subdivisions-month {\n  margin-top: 12px;\n}\n\n.topic-subdivisions-meta,\n.topic-subdivisions-empty {\n  margin: 0;\n  color: var(--hf-text-muted);\n  font-size: 13px;\n}\n\n.topic-subdivision-cards {\n  list-style: none;\n  margin: 12px 0 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 10px;\n}\n\n.topic-subdivision-cards li {\n  margin: 0;\n  padding: 0;\n}\n\n.topic-subdivision-card {\n  border: 1px solid var(--hf-border);\n  border-radius: 12px;\n  padding: 10px 12px;\n  background: #151620;\n  color: var(--hf-text-secondary);\n}\n\n.topic-passage-scroll {\n  height: 220px;\n  overflow-y: auto;\n  border: 1px solid var(--hf-border);\n  border-radius: 10px;\n  background: #10111a;\n  padding: 12px;\n  margin: 0;\n  color: var(--hf-text-secondary);\n  font-size: 14px;\n  line-height: 1.6;\n  white-space: pre-line;\n}\n\n.vote-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n\n.vote-header span,\n.vote-stats span {\n  color: var(--hf-text-muted);\n  font-size: 13px;\n}\n\n.vote-bar {\n  height: 14px;\n  border-radius: 999px;\n  overflow: hidden;\n  border: 1px solid var(--hf-border-strong);\n  display: flex;\n  background: #1a1a24;\n}\n\n.pro-fill {\n  background: linear-gradient(90deg, #86decf 0%, #93cefb 100%);\n  transition: width 180ms ease;\n}\n\n.con-fill {\n  background: linear-gradient(90deg, #ff8ea1 0%, #ff6c8f 100%);\n  transition: width 180ms ease;\n}\n\n.vote-stats {\n  margin-top: 8px;\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.vote-actions {\n  margin-top: 12px;\n  display: flex;\n  gap: 10px;\n}\n\n.topic-btn {\n  border: 1px solid var(--hf-border-strong);\n  border-radius: 999px;\n  background: #171722;\n  color: var(--hf-text);\n  font-size: 13px;\n  font-weight: 700;\n  padding: 8px 14px;\n  cursor: pointer;\n}\n\n.topic-btn:hover,\n.topic-btn:focus {\n  background: #1f1f2b;\n  outline: none;\n  box-shadow: var(--hf-focus-ring);\n}\n\n.topic-btn:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n  box-shadow: none;\n}\n\n.pro-btn.active {\n  border-color: #86decf;\n}\n\n.con-btn.active {\n  border-color: #ff8ea1;\n}\n\n.topic-voting-sticky {\n  margin-top: 0;\n}\n\n.topic-comments-section {\n  margin-top: 12px;\n  border: 1px solid var(--hf-border);\n  border-radius: 14px;\n  background: var(--hf-surface);\n  box-shadow: var(--hf-shadow);\n  padding: 16px;\n}\n\n.topic-column-meta {\n  margin: 0 0 10px;\n  color: var(--hf-text-muted);\n  font-size: 12px;\n}\n\n.topic-comment-editor {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n\n.topic-comment-editor-label {\n  margin: 0;\n  color: var(--hf-text-secondary);\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.topic-stance-selector {\n  display: inline-flex;\n  gap: 8px;\n}\n\n.topic-stance-btn {\n  border: 1px solid var(--hf-border-strong);\n  border-radius: 999px;\n  background: #171722;\n  color: var(--hf-text-secondary);\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n.topic-stance-btn:hover,\n.topic-stance-btn:focus {\n  background: #1f1f2b;\n  color: var(--hf-text);\n  outline: none;\n  box-shadow: var(--hf-focus-ring);\n}\n\n.topic-stance-btn.pro.active {\n  border-color: #93cefb;\n  background: rgba(147, 206, 251, 0.18);\n  color: #d9f1ff;\n}\n\n.topic-stance-btn.con.active {\n  border-color: #ff8ea1;\n  background: rgba(255, 142, 161, 0.16);\n  color: #ffd2dc;\n}\n\n.topic-comment-editor textarea {\n  width: 100%;\n  min-height: 90px;\n  resize: vertical;\n  border-radius: 10px;\n  padding: 10px 12px;\n  background: #0f0f16;\n  border: 1px solid var(--hf-border);\n  color: var(--hf-text);\n}\n\n.topic-empty-state {\n  border: 1px dashed var(--hf-border-strong);\n  border-radius: 12px;\n  padding: 18px 14px;\n  margin-bottom: 8px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.01);\n}\n\n.topic-empty-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  border: 1px solid var(--hf-border-strong);\n  color: var(--hf-text-muted);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 8px;\n  letter-spacing: 0.1em;\n}\n\n.topic-empty-state h4 {\n  margin: 0 0 6px;\n  font-size: 18px;\n  color: var(--hf-text);\n}\n\n.topic-empty-state p {\n  margin: 0;\n  color: var(--hf-text-muted);\n  font-size: 13px;\n  line-height: 1.45;\n}\n\n.topic-state {\n  margin: 0;\n  padding: 16px;\n  border: 1px solid var(--hf-border);\n  border-radius: 12px;\n  background: var(--hf-surface);\n  color: var(--hf-text-secondary);\n}\n\n.topic-state-error {\n  color: #ff8ea1;\n}\n\n@media (min-width: 1100px) {\n  .topic-subdivision-cards {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (min-width: 1280px) {\n  .topic-voting-sticky {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 82px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9waWNzL3RvcGljLWRpc2N1c3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHlFQUF5RTtFQUN6RSw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsK0JBQStCO0VBQy9CLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsYUFBYTtBQUNmOztBQUVBOzs7O0VBSUUsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsU0FBUztFQUNULCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDREQUE0RDtFQUM1RCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw0REFBNEQ7RUFDNUQsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLDJCQUEyQjtFQUMzQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQztBQUNGOztBQUVBO0VBQ0U7SUFDRSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLFNBQVM7RUFDWDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdG9waWNzL3RvcGljLWRpc2N1c3Npb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BpYy1wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMCAyMnB4O1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4udG9waWMtaGVybyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhmLXN1cmZhY2UpO1xuICBib3gtc2hhZG93OiB2YXIoLS1oZi1zaGFkb3cpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udG9waWMta2lja2VyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LW11dGVkKTtcbn1cblxuLnRvcGljLXRpdGxlIHtcbiAgbWFyZ2luOiA4cHggMCA2cHg7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMzJweCwgNXZ3LCA0OHB4KTtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM4NkRFQ0YgMCUsICM5M0NFRkIgNDUlLCAjQkNCNkZCIDEwMCUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRvcGljLW1vbnRoIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50b3BpYy1zdWJkaXZpc2lvbnMsXG4udG9waWMtdm90aW5nLFxuLnRvcGljLXBhc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1zdXJmYWNlKTtcbiAgYm94LXNoYWRvdzogdmFyKC0taGYtc2hhZG93KTtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLnRvcGljLXN1YmRpdmlzaW9ucyBoMixcbi50b3BpYy12b3RpbmcgaDIsXG4udG9waWMtcGFzc2FnZSBoMixcbi50b3BpYy1jb21tZW50cy1zZWN0aW9uIGgzIHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50b3BpYy1oZXJvLW1vbnRoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4udG9waWMtbW9udGgtY3RhIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4udG9waWMtc3ViZGl2aXNpb25zLW1vbnRoIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLnRvcGljLXN1YmRpdmlzaW9ucy1tZXRhLFxuLnRvcGljLXN1YmRpdmlzaW9ucy1lbXB0eSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi50b3BpYy1zdWJkaXZpc2lvbi1jYXJkcyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMTJweCAwIDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBnYXA6IDEwcHg7XG59XG5cbi50b3BpYy1zdWJkaXZpc2lvbi1jYXJkcyBsaSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRvcGljLXN1YmRpdmlzaW9uLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJhY2tncm91bmQ6ICMxNTE2MjA7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi50b3BpYy1wYXNzYWdlLXNjcm9sbCB7XG4gIGhlaWdodDogMjIwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMxMDExMWE7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS42O1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbi52b3RlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi52b3RlLWhlYWRlciBzcGFuLFxuLnZvdGUtc3RhdHMgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4udm90ZS1iYXIge1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXItc3Ryb25nKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogIzFhMWEyNDtcbn1cblxuLnByby1maWxsIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjODZkZWNmIDAlLCAjOTNjZWZiIDEwMCUpO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxODBtcyBlYXNlO1xufVxuXG4uY29uLWZpbGwge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjhlYTEgMCUsICNmZjZjOGYgMTAwJSk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDE4MG1zIGVhc2U7XG59XG5cbi52b3RlLXN0YXRzIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTBweDtcbn1cblxuLnZvdGUtYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbn1cblxuLnRvcGljLWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlci1zdHJvbmcpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogIzE3MTcyMjtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b3BpYy1idG46aG92ZXIsXG4udG9waWMtYnRuOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzFmMWYyYjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogdmFyKC0taGYtZm9jdXMtcmluZyk7XG59XG5cbi50b3BpYy1idG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiAwLjY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5wcm8tYnRuLmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzg2ZGVjZjtcbn1cblxuLmNvbi1idG4uYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY4ZWExO1xufVxuXG4udG9waWMtdm90aW5nLXN0aWNreSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi50b3BpYy1jb21tZW50cy1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGYtc3VyZmFjZSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWhmLXNoYWRvdyk7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi50b3BpYy1jb2x1bW4tbWV0YSB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udG9waWMtY29tbWVudC1lZGl0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLnRvcGljLWNvbW1lbnQtZWRpdG9yLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50b3BpYy1zdGFuY2Utc2VsZWN0b3Ige1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbi50b3BpYy1zdGFuY2UtYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyLXN0cm9uZyk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAjMTcxNzIyO1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b3BpYy1zdGFuY2UtYnRuOmhvdmVyLFxuLnRvcGljLXN0YW5jZS1idG46Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjMWYxZjJiO1xuICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IHZhcigtLWhmLWZvY3VzLXJpbmcpO1xufVxuXG4udG9waWMtc3RhbmNlLWJ0bi5wcm8uYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjOTNjZWZiO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0NywgMjA2LCAyNTEsIDAuMTgpO1xuICBjb2xvcjogI2Q5ZjFmZjtcbn1cblxuLnRvcGljLXN0YW5jZS1idG4uY29uLmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2ZmOGVhMTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MiwgMTYxLCAwLjE2KTtcbiAgY29sb3I6ICNmZmQyZGM7XG59XG5cbi50b3BpYy1jb21tZW50LWVkaXRvciB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA5MHB4O1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJhY2tncm91bmQ6ICMwZjBmMTY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlcik7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbn1cblxuLnRvcGljLWVtcHR5LXN0YXRlIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWhmLWJvcmRlci1zdHJvbmcpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxOHB4IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpO1xufVxuXG4udG9waWMtZW1wdHktaWNvbiB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyLXN0cm9uZyk7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LW11dGVkKTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0byA4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cblxuLnRvcGljLWVtcHR5LXN0YXRlIGg0IHtcbiAgbWFyZ2luOiAwIDAgNnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbn1cblxuLnRvcGljLWVtcHR5LXN0YXRlIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS40NTtcbn1cblxuLnRvcGljLXN0YXRlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1zdXJmYWNlKTtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLnRvcGljLXN0YXRlLWVycm9yIHtcbiAgY29sb3I6ICNmZjhlYTE7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcbiAgLnRvcGljLXN1YmRpdmlzaW9uLWNhcmRzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAudG9waWMtdm90aW5nLXN0aWNreSB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDgycHg7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/topics/topic-discussion.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/topics/topic-discussion.component.ts ***!
    \******************************************************/

  /*! exports provided: TopicDiscussionComponent */

  /***/
  function srcAppTopicsTopicDiscussionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopicDiscussionComponent", function () {
      return TopicDiscussionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth/shared/auth.service */
    "./src/app/auth/shared/auth.service.ts");
    /* harmony import */


    var _topic_discussion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./topic-discussion.service */
    "./src/app/topics/topic-discussion.service.ts");

    var TopicDiscussionComponent = /*#__PURE__*/function () {
      function TopicDiscussionComponent(topicDiscussionService, activatedRoute, router, toastr, authService) {
        _classCallCheck(this, TopicDiscussionComponent);

        this.topicDiscussionService = topicDiscussionService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastr = toastr;
        this.authService = authService;
        this.topic = null;
        this.unifiedComments = [];
        this.loading = false;
        this.errorMessage = '';
        this.isLoggedIn = false;
        this.currentUsername = '';
        this.commentText = '';
        this.selectedCommentStance = 'PRO';
        this.viewMode = 'month';
        this.selectedDomain = 'all';
        this.currentSlug = null;
      }

      _createClass(TopicDiscussionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this47 = this;

          this.isLoggedIn = this.authService.isLoggedIn();
          this.currentUsername = this.authService.getUserName() || '';
          this.authSubscription = this.authService.loggedIn.subscribe(function (loggedIn) {
            _this47.isLoggedIn = loggedIn;
            _this47.currentUsername = loggedIn ? _this47.authService.getUserName() || '' : '';
          });
          this.routeSubscription = this.activatedRoute.paramMap.subscribe(function (params) {
            _this47.currentSlug = params.get('slug');
            _this47.viewMode = _this47.currentSlug ? 'week' : 'month';

            _this47.loadTopic();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _a, _b;

          (_a = this.routeSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          (_b = this.authSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        }
      }, {
        key: "vote",
        value: function vote(stance) {
          var _this48 = this;

          if (!this.topic) {
            return;
          }

          if (!this.isLoggedIn) {
            this.toastr.warning('Please log in to cast your vote');
            return;
          }

          this.topicDiscussionService.voteOnTopic(this.topic.id, {
            stance: stance
          }).subscribe({
            next: function next(summary) {
              if (_this48.topic) {
                _this48.topic.voteSummary = summary;
              }
            },
            error: function error(_error22) {
              var _a;

              _this48.toastr.error(((_a = _error22 === null || _error22 === void 0 ? void 0 : _error22.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to vote on topic');
            }
          });
        }
      }, {
        key: "setCommentStance",
        value: function setCommentStance(stance) {
          this.selectedCommentStance = stance;
        }
      }, {
        key: "submitTopLevelComment",
        value: function submitTopLevelComment() {
          var _this49 = this;

          if (!this.topic) {
            return;
          }

          if (!this.isLoggedIn) {
            this.toastr.warning('Please log in to comment');
            return;
          }

          var normalizedText = (this.commentText || '').trim();

          if (!normalizedText) {
            this.toastr.warning('Comment cannot be empty');
            return;
          }

          this.topicDiscussionService.addComment(this.topic.id, {
            text: normalizedText,
            stance: this.selectedCommentStance
          }).subscribe({
            next: function next() {
              _this49.commentText = '';

              _this49.loadTopic();
            },
            error: function error(_error23) {
              var _a;

              _this49.toastr.error(((_a = _error23 === null || _error23 === void 0 ? void 0 : _error23.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to publish comment');
            }
          });
        }
      }, {
        key: "onThreadUpdated",
        value: function onThreadUpdated() {
          this.loadTopic();
        }
      }, {
        key: "onSidebarDomainSelected",
        value: function onSidebarDomainSelected(domain) {
          this.navigateToHomeDomain(domain);
        }
      }, {
        key: "getProBarPercent",
        value: function getProBarPercent() {
          var _a;

          if (!((_a = this.topic) === null || _a === void 0 ? void 0 : _a.voteSummary) || this.topic.voteSummary.totalVotes === 0) {
            return 50;
          }

          return this.topic.voteSummary.proPercent;
        }
      }, {
        key: "getConBarPercent",
        value: function getConBarPercent() {
          var _a;

          if (!((_a = this.topic) === null || _a === void 0 ? void 0 : _a.voteSummary) || this.topic.voteSummary.totalVotes === 0) {
            return 50;
          }

          return this.topic.voteSummary.conPercent;
        }
      }, {
        key: "isMonthView",
        value: function isMonthView() {
          return this.viewMode === 'month';
        }
      }, {
        key: "goToCurrentWeekTopic",
        value: function goToCurrentWeekTopic() {
          var _a;

          if (!((_a = this.topic) === null || _a === void 0 ? void 0 : _a.slug)) {
            return;
          }

          this.router.navigate(['/topics', this.topic.slug]);
        }
      }, {
        key: "getWeeklyTopicBody",
        value: function getWeeklyTopicBody() {
          var _a, _b, _c;

          var fallbackTitle = (((_a = this.topic) === null || _a === void 0 ? void 0 : _a.weekTitle) || 'this week topic').trim();
          var monthTitle = (((_b = this.topic) === null || _b === void 0 ? void 0 : _b.monthTitle) || 'this month topic').trim();
          var body = (((_c = this.topic) === null || _c === void 0 ? void 0 : _c.weeklyTopicBody) || '').trim();
          var baseBody = body || "This discussion explores \"".concat(fallbackTitle, "\" within \"").concat(monthTitle, "\". Review the context, trade-offs, and practical implications before choosing a Pro or Con stance.");

          if (baseBody.length >= 1200) {
            return baseBody;
          }

          return "".concat(baseBody, "\n\n").concat(this.buildExtendedWeeklyTopicRead(fallbackTitle, monthTitle));
        }
      }, {
        key: "trackBySubdivision",
        value: function trackBySubdivision(index, item) {
          return item.id || index;
        }
      }, {
        key: "navigateToHomeDomain",
        value: function navigateToHomeDomain(domain) {
          this.selectedDomain = domain;

          if (domain === 'all') {
            this.router.navigate(['/']);
            return;
          }

          this.router.navigate(['/'], {
            queryParams: {
              domain: domain
            }
          });
        }
      }, {
        key: "loadTopic",
        value: function loadTopic() {
          var _this50 = this;

          this.loading = true;
          this.errorMessage = '';
          var request$ = this.currentSlug ? this.topicDiscussionService.getTopicBySlug(this.currentSlug) : this.topicDiscussionService.getCurrentTopic();
          request$.subscribe({
            next: function next(topic) {
              _this50.topic = topic;
              _this50.unifiedComments = _this50.buildUnifiedCommentFeed(topic);
              _this50.loading = false;
            },
            error: function error(_error24) {
              var _a;

              _this50.topic = null;
              _this50.unifiedComments = [];
              _this50.loading = false;
              _this50.errorMessage = ((_a = _error24 === null || _error24 === void 0 ? void 0 : _error24.error) === null || _a === void 0 ? void 0 : _a.message) || 'Unable to load topic';

              _this50.toastr.error(_this50.errorMessage);
            }
          });
        }
      }, {
        key: "buildUnifiedCommentFeed",
        value: function buildUnifiedCommentFeed(topic) {
          var _this51 = this;

          if (!topic) {
            return [];
          }

          var roots = [].concat(_toConsumableArray(topic.proComments || []), _toConsumableArray(topic.conComments || [])).map(function (comment) {
            return _this51.cloneCommentTree(comment);
          });
          return this.sortCommentTree(roots);
        }
      }, {
        key: "cloneCommentTree",
        value: function cloneCommentTree(comment) {
          var _this52 = this;

          return Object.assign(Object.assign({}, comment), {
            replies: (comment.replies || []).map(function (reply) {
              return _this52.cloneCommentTree(reply);
            })
          });
        }
      }, {
        key: "sortCommentTree",
        value: function sortCommentTree(comments) {
          var _this53 = this;

          var sorted = _toConsumableArray(comments || []);

          sorted.sort(function (first, second) {
            return _this53.compareComments(first, second);
          });
          sorted.forEach(function (comment) {
            comment.replies = _this53.sortCommentTree(comment.replies || []);
          });
          return sorted;
        }
      }, {
        key: "compareComments",
        value: function compareComments(first, second) {
          var upvoteDifference = ((second === null || second === void 0 ? void 0 : second.upvoteCount) || 0) - ((first === null || first === void 0 ? void 0 : first.upvoteCount) || 0);

          if (upvoteDifference !== 0) {
            return upvoteDifference;
          }

          var firstTimestamp = this.getCommentTimestamp(first);
          var secondTimestamp = this.getCommentTimestamp(second);
          return secondTimestamp - firstTimestamp;
        }
      }, {
        key: "getCommentTimestamp",
        value: function getCommentTimestamp(comment) {
          var parsed = Date.parse((comment === null || comment === void 0 ? void 0 : comment.createdDate) || '');
          return Number.isNaN(parsed) ? 0 : parsed;
        }
      }, {
        key: "buildExtendedWeeklyTopicRead",
        value: function buildExtendedWeeklyTopicRead(weekTitle, monthTitle) {
          return "Start by framing the decision: what should AI systems be allowed to recommend, and what must stay under direct human authority? In medical settings, speed and consistency can improve outcomes, but clinical context often includes edge cases that are hard to encode. As you read this topic, compare ideal workflows with real-world constraints like incomplete records, overloaded staff, and uneven access to specialist review.\n\nThen examine accountability pathways. If an AI-supported decision contributes to patient harm, responsibility is rarely singular. Consider how responsibility may be distributed across model developers, hospital leadership, care teams, and regulators. For \"".concat(weekTitle, "\", discuss what documentation, escalation rules, and override protocols should exist before deployment. Strong governance is not only about preventing failure; it also protects clinicians from unclear liability in high-pressure moments.\n\nA second lens is evidence quality. Ask what level of validation should be required before using AI tools for triage, diagnostics, and treatment planning. Should performance be measured only on benchmark datasets, or also on longitudinal outcomes across diverse populations? In the context of \"").concat(monthTitle, "\", evaluate whether explainability should be mandatory for high-impact decisions, and how to balance explainability with raw predictive performance.\n\nFinally, evaluate human factors. Even accurate systems can fail when teams over-trust outputs or under-trust useful recommendations. Discuss training expectations, user interface design, and how confidence scores should be communicated. The strongest proposals usually combine technical safeguards, clinical workflow fit, and clear ownership of final decisions. Use the comment section below and mark your stance to argue which safeguards are essential now versus which can be phased in over time.");
        }
      }]);

      return TopicDiscussionComponent;
    }();

    TopicDiscussionComponent.ctorParameters = function () {
      return [{
        type: _topic_discussion_service__WEBPACK_IMPORTED_MODULE_5__["TopicDiscussionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    TopicDiscussionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-topic-discussion',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./topic-discussion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/topics/topic-discussion.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./topic-discussion.component.css */
      "./src/app/topics/topic-discussion.component.css"))["default"]]
    })], TopicDiscussionComponent);
    /***/
  },

  /***/
  "./src/app/topics/topic-discussion.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/topics/topic-discussion.service.ts ***!
    \****************************************************/

  /*! exports provided: TopicDiscussionService */

  /***/
  function srcAppTopicsTopicDiscussionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopicDiscussionService", function () {
      return TopicDiscussionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var TopicDiscussionService = /*#__PURE__*/function () {
      function TopicDiscussionService(http) {
        _classCallCheck(this, TopicDiscussionService);

        this.http = http;
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl;
      }

      _createClass(TopicDiscussionService, [{
        key: "getCurrentTopic",
        value: function getCurrentTopic() {
          return this.http.get("".concat(this.apiBaseUrl, "/api/topics/current"));
        }
      }, {
        key: "getTopicBySlug",
        value: function getTopicBySlug(slug) {
          return this.http.get("".concat(this.apiBaseUrl, "/api/topics/").concat(encodeURIComponent(slug)));
        }
      }, {
        key: "getTopicArchive",
        value: function getTopicArchive() {
          return this.http.get("".concat(this.apiBaseUrl, "/api/topics/archive"));
        }
      }, {
        key: "getMyComments",
        value: function getMyComments() {
          return this.http.get("".concat(this.apiBaseUrl, "/api/topics/comments/mine"));
        }
      }, {
        key: "voteOnTopic",
        value: function voteOnTopic(topicId, request) {
          return this.http.post("".concat(this.apiBaseUrl, "/api/topics/").concat(topicId, "/vote"), request);
        }
      }, {
        key: "addComment",
        value: function addComment(topicId, request) {
          return this.http.post("".concat(this.apiBaseUrl, "/api/topics/").concat(topicId, "/comments"), request);
        }
      }, {
        key: "toggleCommentUpvote",
        value: function toggleCommentUpvote(commentId) {
          return this.http.post("".concat(this.apiBaseUrl, "/api/topics/comments/").concat(commentId, "/upvote"), {});
        }
      }, {
        key: "deleteComment",
        value: function deleteComment(commentId) {
          return this.http["delete"]("".concat(this.apiBaseUrl, "/api/topics/comments/").concat(commentId));
        }
      }]);

      return TopicDiscussionService;
    }();

    TopicDiscussionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TopicDiscussionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TopicDiscussionService);
    /***/
  },

  /***/
  "./src/app/topics/topics-archive/topics-archive.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/topics/topics-archive/topics-archive.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTopicsTopicsArchiveTopicsArchiveComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".topics-archive {\n  width: 100%;\n  padding: 0 0 16px;\n}\n\n.topics-archive h1 {\n  margin: 0;\n  font-size: 32px;\n  color: var(--hf-text);\n}\n\n.archive-subtitle {\n  margin: 8px 0 16px;\n  color: var(--hf-text-muted);\n}\n\n.archive-state {\n  border: 1px solid var(--hf-border);\n  border-radius: 12px;\n  background: var(--hf-surface);\n  padding: 14px;\n  color: var(--hf-text-secondary);\n}\n\n.archive-list {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n\n.archive-card {\n  border: 1px solid var(--hf-border);\n  border-radius: 12px;\n  background: var(--hf-surface);\n  box-shadow: var(--hf-shadow);\n  padding: 14px;\n}\n\n.archive-card h2 {\n  margin: 0 0 6px;\n  font-size: 20px;\n  color: var(--hf-text);\n}\n\n.archive-card p {\n  margin: 0 0 10px;\n  color: var(--hf-text-secondary);\n}\n\n.archive-card a {\n  color: var(--hf-link);\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9waWNzL3RvcGljcy1hcmNoaXZlL3RvcGljcy1hcmNoaXZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC90b3BpY3MvdG9waWNzLWFyY2hpdmUvdG9waWNzLWFyY2hpdmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BpY3MtYXJjaGl2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMTZweDtcbn1cblxuLnRvcGljcy1hcmNoaXZlIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbn1cblxuLmFyY2hpdmUtc3VidGl0bGUge1xuICBtYXJnaW46IDhweCAwIDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LW11dGVkKTtcbn1cblxuLmFyY2hpdmUtc3RhdGUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1zdXJmYWNlKTtcbiAgcGFkZGluZzogMTRweDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLmFyY2hpdmUtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBnYXA6IDEycHg7XG59XG5cbi5hcmNoaXZlLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1zdXJmYWNlKTtcbiAgYm94LXNoYWRvdzogdmFyKC0taGYtc2hhZG93KTtcbiAgcGFkZGluZzogMTRweDtcbn1cblxuLmFyY2hpdmUtY2FyZCBoMiB7XG4gIG1hcmdpbjogMCAwIDZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG59XG5cbi5hcmNoaXZlLWNhcmQgcCB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5hcmNoaXZlLWNhcmQgYSB7XG4gIGNvbG9yOiB2YXIoLS1oZi1saW5rKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/topics/topics-archive/topics-archive.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/topics/topics-archive/topics-archive.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TopicsArchiveComponent */

  /***/
  function srcAppTopicsTopicsArchiveTopicsArchiveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopicsArchiveComponent", function () {
      return TopicsArchiveComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _topic_discussion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../topic-discussion.service */
    "./src/app/topics/topic-discussion.service.ts");

    var TopicsArchiveComponent = /*#__PURE__*/function () {
      function TopicsArchiveComponent(topicDiscussionService, toastr, router) {
        _classCallCheck(this, TopicsArchiveComponent);

        this.topicDiscussionService = topicDiscussionService;
        this.toastr = toastr;
        this.router = router;
        this.topics = [];
        this.loading = false;
        this.selectedDomain = 'all';
      }

      _createClass(TopicsArchiveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this54 = this;

          this.loading = true;
          this.topicDiscussionService.getTopicArchive().subscribe({
            next: function next(topics) {
              _this54.topics = topics || [];
              _this54.loading = false;
            },
            error: function error(_error25) {
              var _a;

              _this54.loading = false;

              _this54.toastr.error(((_a = _error25 === null || _error25 === void 0 ? void 0 : _error25.error) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to load topic archive');
            }
          });
        }
      }, {
        key: "trackByTopic",
        value: function trackByTopic(index, item) {
          return item.id || index;
        }
      }, {
        key: "onSidebarDomainSelected",
        value: function onSidebarDomainSelected(domain) {
          this.navigateToHomeDomain(domain);
        }
      }, {
        key: "navigateToHomeDomain",
        value: function navigateToHomeDomain(domain) {
          this.selectedDomain = domain;

          if (domain === 'all') {
            this.router.navigate(['/']);
            return;
          }

          this.router.navigate(['/'], {
            queryParams: {
              domain: domain
            }
          });
        }
      }]);

      return TopicsArchiveComponent;
    }();

    TopicsArchiveComponent.ctorParameters = function () {
      return [{
        type: _topic_discussion_service__WEBPACK_IMPORTED_MODULE_4__["TopicDiscussionService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    TopicsArchiveComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-topics-archive',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./topics-archive.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/topics/topics-archive/topics-archive.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./topics-archive.component.css */
      "./src/app/topics/topics-archive/topics-archive.component.css"))["default"]]
    })], TopicsArchiveComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var hostname = typeof window !== 'undefined' ? window.location.hostname : '';
    var isLocalHost = hostname === 'localhost' || hostname === '127.0.0.1';
    var environment = {
      production: false,
      apiBaseUrl: isLocalHost ? 'http://localhost:8080' : ''
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/nijiachen/humanfirst-MVP/frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map