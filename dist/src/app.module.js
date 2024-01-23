"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const framework_module_1 = require("./modules/framework.module");
const language_module_1 = require("./modules/language.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const experience_module_1 = require("./modules/experience.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            framework_module_1.FrameworkModule,
            language_module_1.LanguageModule,
            experience_module_1.ExperienceModule,
            config_1.ConfigModule.forRoot(),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', '../angular'),
                renderPath: '/angular',
                serveRoot: '/angular/',
            }, {
                rootPath: (0, path_1.join)(__dirname, '..', '../assets'),
                serveRoot: '/assets/',
            }, {
                rootPath: (0, path_1.join)(__dirname, '..', '../react'),
                renderPath: '/react',
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map