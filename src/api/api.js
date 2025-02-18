const BASE_URL = process.env.BASE_URL || 'https://node-app-k6ar.onrender.com'; // Replace with your actual backend URL

export const apiLogin = async (email, password) => {
  const response = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }
  return response.json();
};

export const apiRegister = async (email, phone, password) => {
  const response = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, phone, password })
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Registration failed');
  }
  return response.json();
};

export const apiVerifyOTP = async (otp) => {
  // Simulate OTP verification; replace with actual API if available.
  if (otp !== '123456') {
    throw new Error('Incorrect OTP');
  }
  return { success: true };
};

export const apiBookRide = async (rideData) => {
  const token = localStorage.getItem('jwt_token');
  if (!token) {
    throw new Error('Authorization token is missing');
  }

  const response = await fetch(`${BASE_URL}/api/rides/book`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
     },
    body: JSON.stringify(rideData)
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Ride booking failed');
  }
  return response.json();
};

export const apiProcessPayment = async (paymentData) => {
  const response = await fetch(`${BASE_URL}/api/payments/process`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(paymentData)
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Payment processing failed');
  }
  return response.json();
};

export const apiCancelRide = async (rideId) => {
  const response = await fetch(`${BASE_URL}/api/rides/cancel`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ rideId })
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Cancel ride failed');
  }
  return response.json();
};

export const apiGetPaymentDetails = async () => {
  const response = await fetch(`${BASE_URL}/api/payments/details`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Fetching payment details failed');
  }
  return response.json();
};

export const apiGetProfile = async () => {
  const response = await fetch(`${BASE_URL}/api/users/profile`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Fetching profile failed');
  }
  return response.json();
};

export const apiUpdateProfile = async (profileData) => {
  const response = await fetch(`${BASE_URL}/api/users/profile`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profileData)
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Profile update failed');
  }
  return response.json();
};

export const apiGetAddresses = async () => {
  const response = await fetch(`${BASE_URL}/api/users/addresses`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Fetching addresses failed');
  }
  return response.json();
};

export const apiAddAddress = async (address) => {
  const response = await fetch(`${BASE_URL}/api/users/addresses`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ address })
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Adding address failed');
  }
  return response.json();
};

export const apiExportAddressesCSV = async () => {
  const response = await fetch(`${BASE_URL}/api/users/addresses/export/csv`);
  if (!response.ok) {
    throw new Error('Export CSV failed');
  }
  return response.text();
};

export const apiExportAddressesPDF = async () => {
  const response = await fetch(`${BASE_URL}/api/users/addresses/export/pdf`);
  if (!response.ok) {
    throw new Error('Export PDF failed');
  }
  return response.text();
};
