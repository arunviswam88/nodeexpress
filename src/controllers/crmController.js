import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact',ContactSchema);

export const addNewContact = async (req, res) => {
    try {
      let newContact = new Contact(req.body);
      const savedContact = await newContact.save();
      res.json(savedContact);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const getContacts = async (req,res) => {
    try {
      let contact = await Contact.find({});
      res.json(contact);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const getContactWithID = async (req,res) => {
    try {
      let contact = await Contact.findById(req.params.contactId);
      res.json(contact);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const updateContact = async (req,res) => {
    try {
      let contact = await Contact.findOneAndUpdate({_id:req.params.contactId},req.body,{new:true});
      res.json(contact);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const deleteContact = async (req,res) => {
    try {
      let contact = await Contact.findOneAndDelete({_id:req.params.contactId});
      res.json({ message: 'Successfully deleted contact' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }