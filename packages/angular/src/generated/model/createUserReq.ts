/**
 * rest api interface
 * 项目标准接口
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 */
export interface CreateUserReq { 
    /**
     * 
     */
    username: string;
    /**
     * 
     */
    password: string;
    /**
     * 
     */
    avatar?: string;
    /**
     * 
     */
    email: string;
    /**
     * 
     */
    name?: string;
    /**
     * 
     */
    mobile: string;
    /**
     * 
     */
    isAdmin?: boolean;
    /**
     * 
     */
    isApproved?: boolean;
    /**
     * 
     */
    isDisable?: boolean;
    /**
     * 
     */
    expired?: number;
    /**
     * 
     */
    company?: string;
    /**
     * 
     */
    siteUrl?: string;
    /**
     * 
     */
    address?: string;
    /**
     * 
     */
    groups?: Array<string>;
    /**
     * 
     */
    roles?: Array<string>;
}
