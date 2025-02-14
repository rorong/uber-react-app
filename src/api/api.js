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
  // Implement actual OTP verification API call if available
  // For now, simulate success if otp equals '123456'
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