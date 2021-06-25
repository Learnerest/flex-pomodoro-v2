import * as firebaseAdmin from "firebase-admin";

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.private_key,
      clientEmail: process.env.client_email,
      projectId: process.env.project_id,
    }),
    databaseURL: "https://flex-pomodoro.firebaseio.com",
  });
}

export { firebaseAdmin };
