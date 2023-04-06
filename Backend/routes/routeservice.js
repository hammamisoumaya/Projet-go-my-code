const express = require('express')
const serviceSchema = require ('../model/service')

const serviceRoute = express.Router()


// Route pour créer un nouveau service
serviceRoute.post('/services', (req, res) => {
 try{const { nom, description, prix } = req.body;

  // Ajouter le nouveau service à la base de données ou effectuer toute autre opération nécessaire
  const nouveauService = {
    nom,
    description,
    prix
  }

  // Retourner le nouveau service créé avec un code HTTP 201 (Created)
  res.status(201).json(nouveauService)} catch (err){
    console.log(err)
  }
}) 

// Route pour mettre à jour un service existant
serviceRoute.put('/services/:id', (req, res) => {
  try{
  const { id } = req.params;
  const { nom, description, prix } = req.body;

  // Mettre à jour le service correspondant dans la base de données ou effectuer toute autre opération nécessaire
  const serviceMaj = {
    nom,
    description,
    prix
  };

  // Retourner le service mis à jour avec un code HTTP 200 (OK)
  res.json(serviceMaj)} catch(err){
    console.log(err)
  }
});

// Route pour supprimer un service existant
serviceRoute.delete('/services/:id', (req, res) => {
  try { const { id } = req.params;
const deletservice = serviceSchema.findByIdAndDelete(id)
  // Supprimer le service correspondant de la base de données ou effectuer toute autre opération nécessaire
  // Retourner un message de succès avec un code HTTP 204 (No Content)
  res.sendStatus(204)} catch(err){
    console.log(err)
  }
});

module.exports= serviceRoute