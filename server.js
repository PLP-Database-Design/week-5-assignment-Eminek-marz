
const express = require('express')
const app = express()


// Question 1 goes here



app.get('/patients', (req, res) => {
    const result = patients.map(patient => ({
      patient_id: patient.patient_id,
      first_name: patient.first_name,
      last_name: patient.last_name,
      date_of_birth: patient.date_of_birth
    }));
    res.json(result);
  });




// Question 2 goes here

app.get('/providers', (req, res) => {
    const result = providers.map(provider => ({
      first_name: provider.first_name,
      last_name: provider.last_name,
      provider_specialty: provider.provider_specialty
    }));
    res.json(result);
  });

// Question 3 goes here

app.get('/patients/filter', (req, res) => {
    const firstName = req.query.first_name;
    
    if (!firstName) {
      return res.status(400).json({ message: 'Please provide a first name to filter by.' });
    }
  
    const filteredPatients = patients.filter(patient => patient.first_name.toLowerCase() === firstName.toLowerCase());
    
    if (filteredPatients.length === 0) {
      return res.status(404).json({ message: 'No patients found with that first name.' });
    }
  
    res.json(filteredPatients);
  });

// Question 4 goes here

app.get('/providers/filter', (req, res) => {
    const specialty = req.query.specialty;
  
    if (!specialty) {
      return res.status(400).json({ message: 'Please provide a specialty to filter by.' });
    }
  
    const filteredProviders = providers.filter(provider => provider.provider_specialty.toLowerCase() === specialty.toLowerCase());
  
    if (filteredProviders.length === 0) {
      return res.status(404).json({ message: 'No providers found with that specialty.' });
    }
  
    res.json(filteredProviders);
  });
  


// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})