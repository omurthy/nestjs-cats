import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class AppService {
  axios = require('axios');

  options = {
    method: 'GET',
    url: 'https://cat-fact.herokuapp.com/facts',
    params: {
      lat: '35.5',
      lon: '-78.5',
    },
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
    },
  };

  async getHello(): Promise<string> {
    try {
      const response = await this.axios.request(this.options);
      console.log(response.data[1].text);
      return response.data;
    } catch (error) {
      console.error(error);
      return 'error';
    }
    return 'Hello World!';
  }
}
