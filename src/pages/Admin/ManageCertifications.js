// src/pages/Admin/ManageCertifications.js - Updated with image upload
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ManageCertifications = () => {
    const [certifications, setCertifications] = useState([
        {
            id: 1,
            title: 'ChatGPT and Generative AI in Business',
            issuer: 'Udemy',
            date: 'Aug 2025',
            category: 'ai',
            credentialId: 'UC-79e56cfb-9171-4ddf-b815-cb5b0953832f',
            logo: 'https://cdn-icons-png.flaticon.com/512/5969/5969059.png',
            certificateImage: 'https://via.placeholder.com/800x600/0f0f0f/00bcd4?text=ChatGPT+AI+Certificate',
            verifyLink: 'https://www.udemy.com/certificate/UC-79e56cfb-9171-4ddf-b815-cb5b0953832f/'
        }
    ]);

    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        issuer: '',
        date: '',
        category: 'ai',
        credentialId: '',
        logo: '',
        certificateImage: '',
        verifyLink: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCert = {
            id: certifications.length + 1,
            ...formData,
            status: 'completed'
        };
        setCertifications([...certifications, newCert]);
        setFormData({
            title: '',
            issuer: '',
            date: '',
            category: 'ai',
            credentialId: '',
            logo: '',
            certificateImage: '',
            verifyLink: ''
        });
        setShowForm(false);
    };

    const deleteCert = (id) => {
        setCertifications(certifications.filter(cert => cert.id !== id));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-white mb-2">
                        Manage Certifications
                    </h1>
                    <p className="text-textSecondary">Manage your professional certifications with images and verification links</p>
                </div>
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-gradient-to-r from-accent to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
                >
                    <span className="material-icons mr-2">add</span>
                    Add New Certification
                </button>
            </div>

            {/* Add Certification Form */}
            {showForm && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-gradient-to-br from-secondary to-background p-6 rounded-2xl border border-gray-800 mb-6"
                >
                    <h2 className="text-xl font-heading font-semibold text-white mb-4">
                        Add New Certification
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-textSecondary mb-2">Title *</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full bg-background border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                placeholder="Enter certification title"
                                required
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-textSecondary mb-2">Issuer *</label>
                                <input
                                    type="text"
                                    value={formData.issuer}
                                    onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
                                    className="w-full bg-background border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Enter issuer name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-textSecondary mb-2">Date *</label>
                                <input
                                    type="text"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    className="w-full bg-background border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="e.g., Aug 2025"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-textSecondary mb-2">Category</label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full bg-background border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                >
                                    <option value="ai">AI & ML</option>
                                    <option value="tech">Technology</option>
                                    <option value="business">Business</option>
                                    <option value="cyber">Cybersecurity</option>
                                    <option value="creative">Creative</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-textSecondary mb-2">Credential ID</label>
                                <input
                                    type="text"
                                    value={formData.credentialId}
                                    onChange={(e) => setFormData({ ...formData, credentialId: e.target.value })}
                                    className="w-full bg-background border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Enter credential ID"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-textSecondary mb-2">Logo URL</label>
                                <input
                                    type="url"
                                    value={formData.logo}
                                    onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                                    className="w-full bg-background border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="https://example.com/logo.png"
                                />
                                <p className="text-textSecondary text-xs mt-1">Fixed size: 48x48px (will be resized)</p>
                            </div>

                            <div>
                                <label className="block text-textSecondary mb-2">Certificate Image URL</label>
                                <input
                                    type="url"
                                    value={formData.certificateImage}
                                    onChange={(e) => setFormData({ ...formData, certificateImage: e.target.value })}
                                    className="w-full bg-background border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="https://example.com/certificate.jpg"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-textSecondary mb-2">Verification Link</label>
                            <input
                                type="url"
                                value={formData.verifyLink}
                                onChange={(e) => setFormData({ ...formData, verifyLink: e.target.value })}
                                className="w-full bg-background border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                placeholder="https://example.com/verify"
                            />
                        </div>

                        <div className="flex space-x-4">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-accent to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                            >
                                Add Certification
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </motion.div>
            )}

            {/* Certifications List */}
            <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-br from-secondary to-background p-6 rounded-2xl border border-gray-800 hover:border-accent/50 transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-start space-x-4">
                                {/* Logo with fixed size */}
                                <div className="flex-shrink-0">
                                    {cert.logo ? (
                                        <img
                                            src={cert.logo}
                                            alt={`${cert.issuer} logo`}
                                            className="w-12 h-12 object-contain rounded-lg bg-white p-1"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 bg-gradient-to-r from-accent to-blue-500 rounded-lg flex items-center justify-center">
                                            <span className="material-icons text-white text-sm">verified</span>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-xl font-heading font-semibold text-white mb-2">
                                        {cert.title}
                                    </h3>
                                    <div className="flex items-center space-x-4 text-textSecondary">
                                        <span>{cert.issuer}</span>
                                        <span>•</span>
                                        <span>{cert.date}</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => deleteCert(cert.id)}
                                className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                            >
                                <span className="material-icons text-sm">delete</span>
                            </button>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                                {cert.category}
                            </span>
                            {cert.credentialId && (
                                <span className="text-textSecondary text-sm">
                                    ID: {cert.credentialId}
                                </span>
                            )}
                        </div>

                        {/* Image Preview */}
                        {cert.certificateImage && (
                            <div className="mt-4">
                                <p className="text-textSecondary text-sm mb-2">Certificate Preview:</p>
                                <img
                                    src={cert.certificateImage}
                                    alt="Certificate preview"
                                    className="w-32 h-20 object-cover rounded-lg border border-gray-700"
                                />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {certifications.length === 0 && (
                <div className="text-center py-12">
                    <span className="material-icons text-6xl text-textSecondary mb-4">verified</span>
                    <h3 className="text-xl font-heading font-semibold text-textSecondary mb-2">
                        No certifications yet
                    </h3>
                    <p className="text-textSecondary">
                        Start by adding your first certification
                    </p>
                </div>
            )}
        </motion.div>
    );
};

export default ManageCertifications;