const seedData = {
    gods: [
        {
            name: "Lord Shiva",
            title: "The Destroyer",
            description: "In the silence of the Himalayas, Mahadev resides in eternal meditation.",
            mantra: "Om Namah Shivaya",
            imagePath: "/images/shiva/meditation.png"
        },
        {
            name: "Lord Vishnu",
            title: "The Preserver",
            description: "Resting upon the cosmic serpent Sheshanaga, Lord Vishnu maintains the cosmic order.",
            mantra: "Om Namo Narayanaya",
            imagePath: "/images/vishnu/vaikuntha.png"
        }
    ],
    scriptures: [
        { type: "Veda", name: "Rig Veda", description: "The oldest of the Vedas, containing hymns to the gods." },
        { type: "Veda", name: "Sama Veda", description: "The Veda of melodies and chants." },
        { type: "Purana", name: "Shiva Purana", description: "Extolling the greatness of Lord Shiva." }
    ],
    temples: [
        { name: "Kedarnath", location: "Uttarakhand", deity: "Lord Shiva", images: ["/images/temples/kedarnath.png"] }
    ]
};

console.log("Seed data prepared:", JSON.stringify(seedData, null, 2));
// In a real environment, this would use mongoose to connect and insert.
