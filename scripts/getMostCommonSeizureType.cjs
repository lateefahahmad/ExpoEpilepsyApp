const firebaseConfig = {
  apiKey: "AIzaSyCn1tSbM1az5-aqZWpYzN2ha2Xpy0ZKk0M",
  authDomain: "mmu-epilepsy-app.firebaseapp.com",
  projectId: "mmu-epilepsy-app",
  storageBucket: "mmu-epilepsy-app.appspot.com",
  messagingSenderId: "823906982132",
  appId: "1:823906982132:web:97f66d0fc0748b23cb66a1",
  measurementId: "G-4EZD3JZQ5S",
};

const admin = require("firebase-admin");
admin.initializeApp(firebaseConfig);

const db = admin.firestore();

async function getAllDocuments() {
  const collectionName = "seizureData"; // Replace with your collection name
  try {
    const snapshot = await db.collection(collectionName).get();
    const documents = [];

    snapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });

    console.log(documents);

    return documents;
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
}

getAllDocuments();
