const webpackMerge = require('webpack-merge');

/**
 * Environment configuration JSON
 * @type {string}
 */
const environmentConfig = require('./environment.config.json');



/**
 * Maps process lifecycle to enviroment name
 * @return {string}
 */
const mapEnv = () => {
    const lifeCycle = process.env.npm_lifecycle_event;
    const environmentMapping = {
        local:  ['start']
    };

    for (let prop in environmentMapping) {
        const found = environmentMapping[prop].indexOf(lifeCycle);
        if(found != -1) {
            return prop;
        }
    }
};


/**
 * Environment variable local
 */
const ENV = mapEnv();

/**
 * Application source
 * @type {string}
 */
const app_root = 'src';


/**
 * Environment configuration could be set also from command line so need to merge with json conf
 * @param enviroment
 */

const setEnvironmentConf = (enviroment, environmentConfig) => {
    const {
        npm_config_protocol: protocol,
        npm_config_host: host,
        npm_config_port: port,
        npm_config_suffix: suffix
    } = process.env;

    const obj = {protocol, host, port, suffix};
    let ext = {};
    for (let prop in obj) {
        if (obj[prop] !== undefined) {
            ext = {...ext, [prop]: obj[prop]}
        }
    }

    return {
        ...environmentConfig[enviroment],
        ...ext
    };
};


/**
 * Common webpack configuration
 * @type {{app_root, output, module, plugins}}
 */
const commonConfig = require('./webpack.common')({...setEnvironmentConf(ENV, environmentConfig), app_root});


/**
 * Combine various environments based on enviroment variable
 * @param env
 * @return {*}
 */
const combine = (env)=> {
    env = env || 'local';
    return require(`./webpack.${env}.config.js`)({app_root});
};


module.exports = webpackMerge(commonConfig, combine(ENV));

