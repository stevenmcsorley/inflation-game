// pages/api/weekly-outgoings.ts

import axios from 'axios';

import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      // Replace with your backend API endpoint for weekly outgoings
      const backendOutgoingsEndpoint = 'http://localhost:3000/weekly-outgoings';

      // Send a GET request to your Node.js Express backend
      const response = await axios.get(backendOutgoingsEndpoint, { withCredentials: true });

      // Forward the response from the backend to the frontend
      res.status(response.status).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  } else {
    res.status(405).end(); // Method not allowed for other HTTP methods
  }
};
