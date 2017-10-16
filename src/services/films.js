'use strict'

import config from './config'
import axios from 'axios'

export const HTTP = axios.create({
  baseURL: config.apiUrl
})
