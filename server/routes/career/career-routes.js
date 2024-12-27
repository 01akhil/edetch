const express = require('express');
const fetch = require('node-fetch');
const xml2js = require('xml2js');

const router = express.Router();
const username = process.env.ONET_USERNAME;
const password = process.env.ONET_PASSWORD;
const authHeader = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');

router.get('/careers', async (req, res) => {
  const answers = req.query.answers;

  try {
    const url = `https://services.onetcenter.org/ws/mnm/interestprofiler/careers?answers=${answers}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error(`API request failed with status: ${response.status}`);
    const xmlText = await response.text();

    xml2js.parseString(xmlText, { explicitArray: false }, (err, result) => {
      if (err) return res.status(500).json({ error: 'Failed to parse XML response' });
      res.json(result);
    });
  } catch (error) {
    console.error('Error fetching ONET data:', error);
    res.status(500).json({ error: 'Failed to fetch careers' });
  }
});



router.get('/careers/:code', async (req, res) => {
  const code = req.params.code;
console.log("Reached here")
  try {
    const url = `https://services.onetcenter.org/ws/mnm/careers/${code}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error(`API request failed with status: ${response.status}`);
    const xmlText = await response.text();

    xml2js.parseString(xmlText, { explicitArray: false }, (err, result) => {
      if (err) return res.status(500).json({ error: 'Failed to parse XML response' });
      res.json(result);
    });
  } catch (error) {
    console.error('Error fetching career details:', error);
    res.status(500).json({ error: 'Failed to fetch career details' });
  }
});


router.get('/careers/:code/:resourceTitle',         
 

  async (req, res) => {
  const code = req.params.code;
  const resourceTitle = req.params.resourceTitle;
  const title=resourceTitle.toLowerCase();
console.log("calling api for resources ")
  try {
    const url = `https://services.onetcenter.org/ws/mnm/careers/${code}/${title}`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error(`API request failed with status: ${response.status}`);
    const xmlText = await response.text();

    xml2js.parseString(xmlText, { explicitArray: false }, (err, result) => {
      if (err) return res.status(500).json({ error: 'Failed to parse XML response' });
      res.json(result);
    });
  } catch (error) {
    console.error('Error fetching career details:', error);
    res.status(500).json({ error: 'Failed to fetch career details' });
  }
});


router.get('/industry/:industryCode',         
 
  
  async (req, res) => {

  const industryCode = req.params.industryCode;

  console.log("call for industry");
  try {
    const url = `https://services.onetcenter.org/ws/mnm/browse/${industryCode}`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error(`API request failed with status: ${response.status}`);
    const xmlText = await response.text();

    xml2js.parseString(xmlText, { explicitArray: false }, (err, result) => {
      if (err) return res.status(500).json({ error: 'Failed to parse XML response' });
      res.json(result);
    });
  } catch (error) {
    console.error('Error fetching career details:', error);
    res.status(500).json({ error: 'Failed to fetch career details' });
  }
});



module.exports = router;
