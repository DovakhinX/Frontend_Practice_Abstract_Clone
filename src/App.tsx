
import Navbar from './assets/Components/Navbar'
import SearchSection from './assets/Components/SearchSection'
import DataCard from './assets/Components/DataCard'
import Abstract from './assets/icons/abstract'
import Account from './assets/icons/account'
import Team from './assets/icons/team'
import Bill from './assets/icons/bill'
import Key from './assets/icons/key'
import Support from './assets/icons/support'
import Footer from './assets/Components/Footer'
import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <SearchSection />
      <div className='flex flex-row flex-wrap   items-center justify-center p-1 mt-[50px] gap-6 w-[100vw]'>
        <DataCard title={'Using Abstract'} describe={'Abstract lets you manage, version, and document your designs in one place.'} img={<Abstract />} />
        <DataCard title={'Manage your account'} describe={'Configure your account settings, such as your email, profile details, and password.'} img={<Account />} />
        <DataCard title={'Manage organizations, teams, and projects'} describe={'Use Abstract organizations, teams, and projects to organize your people and your work.'} img={<Team />} />
        <DataCard title={'Manage billing'} describe={'Change subscriptions and payment details.'} img={<Bill />} />
        <DataCard title={'Authenticate to Abstract'} describe={'Set up and configure SSO, SCIM, and Just-in-Time provisioning.'} img={<Key />} />
        <DataCard title={'Abstract support'} describe={'Get in touch with a human.'} img={<Support />} />
      </div>
      <Footer/>
    </>
  )
}

export default App
