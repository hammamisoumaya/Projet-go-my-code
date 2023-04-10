const serviceSchema = require('../model/service');

// Récupérer tous les services
exports.getAllServices = async (req, res) => {
  try {
    const services = await serviceSchema.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Récupérer un service par son ID
exports.getServiceById = async (req, res) => {
  try {
    const service = await serviceSchema.findById(req.params.id);
    if (service == null) {
      return res.status(404).json({ message: "Le service n'existe pas" });
    }
    res.json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Créer un nouveau service
exports.createService = async (req, res) => {
  const service = new serviceSchema({
    nom: req.body.nom,
    description: req.body.description,
    image: req.body.image
  });

  try {
    const nouveauService = await serviceSchema.save();
    res.status(201).json(nouveauService);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Mettre à jour un service existant
exports.updateService = async (req, res) => {
  try {
    const service = await serviceSchema.findById(req.params.id);
    if (service == null) {
      return res.status(404).json({ message: "Le service n'existe pas" });
    }

    if (req.body.nom != null) {
      service.nom = req.body.nom;
    }

    if (req.body.description != null) {
      service.description = req.body.description;
    }

    if (req.body.image != null) {
      service.image = req.body.image;
    }

    const serviceMaj = await service.save();
    res.json(serviceMaj);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Supprimer un service existant
exports.deleteService = async (req, res) => {
  try {
    const service = await serviceSchema.findById(req.params.id);
    if (service == null) {
      return res.status(404).json({ message: "Le service n'existe pas" });
    }

    await service.remove();
    res.json({ message: "Le service a été supprimé" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};