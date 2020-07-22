import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAf3oVxcyYdTjfoOoPuod4NZoM752sWCtk",
    authDomain: "internassign-df2b8.firebaseapp.com",
    databaseURL: "https://internassign-df2b8.firebaseio.com",
    projectId: "internassign-df2b8",
    storageBucket: "internassign-df2b8.appspot.com",
    messagingSenderId: "548377376619",
    appId: "1:548377376619:web:3cf1228f4f49afa3e37e2e"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;