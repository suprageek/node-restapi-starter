import * as dotenv from "dotenv";

dotenv.config();

const e = process.env;

const ENV = e.NODE_ENV || '';
const BASE_URL = e.BASE_URL || '';
const SERVER_PORT = parseInt(e.SERVER_PORT || '7010');
const APP_NAME = e.APP_NAME || '';
const APP_VERSION = e.APP_VERSION || '';
const API_BASE = e.API_BASE || '';
const DEFAULT_TIMEZONE = e.DEFAULT_TIMEZONE || '';
const AUTH_ENABLED = e.AUTH_ENABLED || 'true';
const JWT_SECRET = e.JWT_SECRET || 'ogA9ppB$S!dy!hu3Rauvg!L96';
const JWT_EXPIRE = e.JWT_EXPIRE || '86400';
const JWT_EMAIL_SECRET = e.JWT_EMAIL_SECRET || 'SDchs983GDS$DJssd34scxj';
const JWT_EMAIL_EXPIRE = e.JWT_EMAIL_EXPIRE || '300';
const DB_HOST = e.DB_HOST || '';
const DB_PORT = parseInt(e.DB_PORT || '27017');
const DB_NAME = e.DB_NAME || '';
const DB_USER = e.DB_USER || '';
const DB_PASSWORD = e.DB_PASSWORD || '';
const DB_AUTH = e.DB_AUTH || '';
const LOG_FILE_NAME = e.LOG_FILE_NAME || '';
const LOG_FILE_DIR = e.LOG_FILE_DIR || '';
const MAIL_USERNAME = e.MAIL_USERNAME || '';
const MAIL_PASSWORD = e.MAIL_PASSWORD || '';
const MAIL_HOST = e.MAIL_HOST || '';
const MAIL_PORT = e.MAIL_PORT || '';
const WEB_APP_URL = e.WEB_APP_URL || '';
const RESET_PASSWORD_PATH = e.RESET_PASSWORD_PATH || '';
const CONFIRM_ACCOUNT_PATH = e.CONFIRM_ACCOUNT_PATH || '';


export {
  ENV, BASE_URL, SERVER_PORT, APP_NAME, APP_VERSION, API_BASE, DEFAULT_TIMEZONE, AUTH_ENABLED, JWT_SECRET, JWT_EXPIRE,
  JWT_EMAIL_SECRET, JWT_EMAIL_EXPIRE, DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, DB_AUTH, LOG_FILE_NAME,
  LOG_FILE_DIR, MAIL_USERNAME, MAIL_PASSWORD, MAIL_HOST, MAIL_PORT, WEB_APP_URL, RESET_PASSWORD_PATH,
  CONFIRM_ACCOUNT_PATH
};
