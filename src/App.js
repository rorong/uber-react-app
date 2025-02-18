import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Mobile screens
import SplashScreen from './components/Mobile/SplashScreen';
import LoginScreen from './components/Mobile/LoginScreen';
import RegisterScreen from './components/Mobile/RegisterScreen';
import OTPVerificationScreen from './components/Mobile/OTPVerificationScreen';
import HomeScreen from './components/Mobile/HomeScreen';
import RideBookingScreen from './components/Mobile/RideBookingScreen';
import RideTrackingScreen from './components/Mobile/RideTrackingScreen';
import PaymentScreen from './components/Mobile/PaymentScreen';
import PaymentReportScreen from './components/Mobile/PaymentReportScreen';
import ProfileScreen from './components/Mobile/ProfileScreen';
import RatingScreen from './components/Mobile/RatingScreen';
import SafetyScreen from './components/Mobile/SafetyScreen';
import AdvancedCustomizationScreen from './components/Mobile/AdvancedCustomizationScreen';
import AIFeaturesScreen from './components/Mobile/AIFeaturesScreen';
import BlockchainScreen from './components/Mobile/BlockchainScreen';

// Admin screens
import AdminLoginScreen from './components/Admin/AdminLoginScreen';
import AdminDashboard from './components/Admin/AdminDashboard';
import UserManagement from './components/Admin/UserManagement';
import RideManagement from './components/Admin/RideManagement';
import PaymentReports from './components/Admin/PaymentReports';
import DisputeDocumentVerification from './components/Admin/DisputeDocumentVerification';
import SystemSettings from './components/Admin/SystemSettings';
import NotificationManagement from './components/Admin/NotificationManagement';
import AnalyticsReports from './components/Admin/AnalyticsReports';
import SupportTicketManagement from './components/Admin/SupportTicketManagement';
import FleetManagement from './components/Admin/FleetManagement';
import MarketingPromotion from './components/Admin/MarketingPromotion';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Mobile Routes */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/otp" element={<OTPVerificationScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/rideBooking" element={<RideBookingScreen />} />
        <Route path="/rideTracking" element={<RideTrackingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/paymentReport" element={<PaymentReportScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/rating" element={<RatingScreen />} />
        <Route path="/safety" element={<SafetyScreen />} />
        <Route path="/advancedCustomization" element={<AdvancedCustomizationScreen />} />
        <Route path="/aiFeatures" element={<AIFeaturesScreen />} />
        <Route path="/blockchain" element={<BlockchainScreen />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLoginScreen />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/rides" element={<RideManagement />} />
        <Route path="/admin/paymentReports" element={<PaymentReports />} />
        <Route path="/admin/disputes" element={<DisputeDocumentVerification />} />
        <Route path="/admin/systemSettings" element={<SystemSettings />} />
        <Route path="/admin/notifications" element={<NotificationManagement />} />
        <Route path="/admin/analytics" element={<AnalyticsReports />} />
        <Route path="/admin/support" element={<SupportTicketManagement />} />
        <Route path="/admin/fleet" element={<FleetManagement />} />
        <Route path="/admin/marketing" element={<MarketingPromotion />} />
      </Routes>
    </div>
  );
}

export default App;
