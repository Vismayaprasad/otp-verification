module.exports = function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString(); // ^ Generates a random 4-digit OTP
  };
  