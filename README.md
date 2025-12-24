# Food Admin App

A modern React-based admin application for managing food items with Firebase backend integration.

## Features

- **Authentication**: Secure login system using Firebase Authentication
- **Food Management**: Add, view, edit, and delete food items
- **Image Upload**: Upload food images to Cloudinary
- **Real-time Database**: Firebase Firestore for data storage
- **Responsive Design**: Built with Tailwind CSS for mobile-friendly interface
- **Protected Routes**: Route protection for authenticated users only

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Image Hosting**: Cloudinary
- **Routing**: React Router DOM
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase project
- Cloudinary account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd admin-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── FoodTable.jsx      # Food items table component
│   └── ProtectedRoute.jsx # Route protection component
├── pages/
│   ├── Login.jsx          # Authentication page
│   ├── Dashboard.jsx      # Main dashboard with food table
│   └── AddFood.jsx        # Add new food item form
├── firebase.js            # Firebase configuration
├── App.jsx                # Main app component with routing
└── main.jsx               # App entry point
```

## Firebase Setup

1. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password provider
3. Create a Firestore database
4. Enable Storage if needed
5. Copy your Firebase config to the `.env` file

## Cloudinary Setup

1. Create a Cloudinary account at [https://cloudinary.com/](https://cloudinary.com/)
2. Get your cloud name and create an upload preset
3. Add the credentials to your `.env` file

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private and proprietary.
