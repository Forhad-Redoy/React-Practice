import {Link,Outlet} from 'react-router-dom'

export default function Buttons() {
  return (
    <div>
        
            <ul className='flex gap-8'>
                <li>
                    <Link to='http'>HttpRequest</Link>
                </li>
                <li>
                    <Link to='quran'>Quran</Link>
                </li>
            </ul>
            <div>
                <Outlet/>
            </div>
        
    </div>
  )
}
