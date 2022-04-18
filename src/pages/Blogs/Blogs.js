import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-3'>
            <div>
                <h3 className='mb-3'>Difference between authorization and authentication</h3>
                <p>Authentication verifies the identity of users for providing the access to the system. Authorization determines what resources a person or user can access.
                </p>
                <p>
                    In this process, users or persons are verified. In this process, users or persons are validated.
                </p>
                <p>
                    The authentication process works through passwords, one-time pins, biometric information, or other information provided by the user. The authorization process works through settings that are added and maintained by the organization.
                </p>
                <p>
                    Authentication is visible and changeable by the user. Authorization isn't visible or changeable by the user.
                </p>
            </div>

            <div>
                <h3 className='mt-4'>Why are we using firebase? What other options do have to implement authentication?</h3>
                <p>
                Firebase is a platform by Google that provides us functionalities and helps with the backend development of Android, iOS, or web. We can give our users a quick, intuitive sign-in process with Firebase Authentication. We can use Firebase Database to store user's data like chat messages, user's details, and other metadata. If we want to store user-generated data for example the profile picture, multimedia messages, etc we can use Firebase Cloud Storage to store this type of data easily. Firebase has more features that make our life more easy. 
                </p>
                <p><strong>We can also implement these authentications methods:</strong></p>
                <ul>
                    <li>Multi-factor authentication</li>
                    <li>Certificate-based authentication</li>
                    <li>Biometric authentication: Common biometric authentication methods is Facial recognition, Fingerprint scanners, Speaker Recognition, Eye scanners</li>
                    <li>Token-based authentication</li>
                </ul>
            </div>
            <div>
                <h3 className='mt-4'>What other services does firebase provide other than authentication?</h3>
                <p>There are many services which Firebase provides, most useful of them are:  </p>
                <ul>
                    <li>Cloud Firestore </li>
                    <li>Cloud Functions </li>
                    <li>Hosting </li>
                    <li>Cloud Storage </li>
                    <li>Google Analytics </li>
                    <li>Predictions </li>
                    <li>Cloud Messaging </li>
                    <li>Dynamic Links </li>
                    <li>Remote Config</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;