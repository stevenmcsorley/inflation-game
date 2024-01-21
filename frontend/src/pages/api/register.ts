// pages/api/register.ts

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      // Replace with your backend API endpoint for registration
      const backendRegisterEndpoint = 'http://localhost:3000/register';

      // Send a POST request to your Node.js Express backend for registration
      const response = await axios.post(backendRegisterEndpoint, req.body);

      // If the registration was successful, redirect to the dashboard
      if (response.data.success) {
        res.status(response.status).json(response.data);
      } else {
        res.status(response.status).json(response.data);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  } else {
    res.status(405).end(); // Method not allowed for other HTTP methods
  }
};
