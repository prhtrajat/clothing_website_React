import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, 
  collection, writeBatch,
query, getDocs } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCQJcMgMgkm4lqR60C79-oMbcfrS8k1j_I",
  authDomain: "merchant-db.firebaseapp.com",
  projectId: "merchant-db",
  storageBucket: "merchant-db.appspot.com",
  messagingSenderId: "200891283574",
  appId: "1:200891283574:web:9b0390d5757f189cd2c757"
};

const firebaseApp = initializeApp(firebaseConfig);



const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth(firebaseApp);

export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);   
  });

  await batch.commit();
  console.log("done");
}


export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;

}



export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {

  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);

  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {

      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log("error creating user: ", error.message);
    }
  }

  return userDocRef;

}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if( !email || !password ) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if( !email || !password ) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListner = (callback) => {
  return onAuthStateChanged(auth, callback);
}