import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from './context/authctx';

const Signup = () => {
  const { user, loading, error, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleGoogleSignup = async () => {
    await signInWithGoogle();
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f8f9fa'
      }}>
        <div style={{
          fontSize: '1.2rem',
          color: '#2c3e50'
        }}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '40px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{
          color: '#2c3e50',
          marginBottom: '10px',
          fontSize: '2rem'
        }}>Create Account</h1>
        
        <p style={{
          color: '#7f8c8d',
          marginBottom: '30px',
          fontSize: '0.95rem'
        }}>Sign up to start shopping with us</p>

        {error && (
          <div style={{
            background: '#fee',
            border: '1px solid #fcc',
            color: '#c00',
            padding: '12px',
            borderRadius: '6px',
            marginBottom: '20px',
            fontSize: '0.9rem'
          }}>
            {error}
          </div>
        )}

        <button
          onClick={handleGoogleSignup}
          style={{
            width: '100%',
            padding: '14px 20px',
            background: '#ffffff',
            border: '2px solid #ddd',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            transition: 'all 0.3s ease',
            marginBottom: '20px'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#f9f9f9';
            e.target.style.borderColor = '#999';
            e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#ffffff';
            e.target.style.borderColor = '#ddd';
            e.target.style.boxShadow = 'none';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.02 6.21c1.91-5.08 6.9-8.93 12.42-8.93z"></path>
            <path fill="#4285F4" d="M23.99 44.5c6.47 0 11.9-2.38 15.89-6.84l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.52 0-12.47-4.97-13.38-11.5H2.18v6.56C6.07 39.72 14.16 44.5 23.99 44.5z"></path>
            <path fill="#FBBC05" d="M10.88 27.68c-.48-1.45-.76-2.99-.76-4.68s.27-3.23.76-4.68l-8.03-6.21C.92 15.16 0 19.88 0 24.5s.92 9.34 2.85 13.05l8.03-6.21z"></path>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.93l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.52 0-12.47-4.97-13.38-11.5H2.18v6.56C6.07 39.72 14.16 44.5 24 44.5z"></path>
            <path fill="none" d="M0 0h48v48H0z"></path>
          </svg>
          Sign up with Google
        </button>

        <p style={{
          color: '#7f8c8d',
          marginTop: '20px',
          fontSize: '0.9rem'
        }}>
          Already have an account?{' '}
          <Link to="/login" style={{
            color: '#667eea',
            textDecoration: 'none',
            fontWeight: '600'
          }}>
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
