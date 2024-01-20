import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <div className='wrapper'>
      <div className='border'>
        <Spline className='spline' scene="https://prod.spline.design/i83NqDAy7E6ffKga/scene.splinecode" />

        <nav>

          <ul class="nav-links">
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
          </ul>

        </nav>
      </div>

    </div>
    
  );
}
