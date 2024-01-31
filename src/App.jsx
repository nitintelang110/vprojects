import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Home/Home';
import { Accordian } from './Accordian/Accordian';
import { IoHomeOutline } from "react-icons/io5";
import { ModalTest } from './Modal/modal-test';
import { TabTest } from './custom-tabs/tab-test';
import { GithubProfileFinder } from './github-profile-finder';
import {ImageSlider } from './image-slider';
import {LightDarkMode} from './light-dark-mode'
import {LoadMoreData} from './load-more-data'
import { QRCodeGenerator } from './qr-code-generator';
import { RandomColor } from './random-color';
import { StarRating } from './star-rating';
import { TicTacToe } from './tic-tact-toe';
import { TreeView } from './tree-view';
import {TextHighlighter} from './TextHighlighter/TextHighlighter';
import menus from './tree-view/data';
import UseFetchHookTest from './use-fetch/test';
import UseOnclickOutsideTest from './use-outside-click/test';
import UseWindowResizeTest from './use-window-resize/test';
import ScrollIndicator from './scroll-indicator';
import ScrollToTopAndBottom from './scroll-to-top-and-bottom';
import SearchAutoComplete from './search-autocomplete-with-api';
import InfiniteScroll from './Infinite Scroll/InfiniteScroll';
import ControlledCopmponent from './FormControlled/FormControlled';
import UncontrolledCopmponent from './FormUncontrolled/FormUncontrolled';
import FormControlledFormik from './FormControlledFormik/FormControlledFormik';
import ResponsiveNavbar from './ResponsiveNavbar/ResponsiveNavbar';
import Pagination from './Pagination/Pagination';
import ScrollToSection from './ScrollToSection/ScrollToSection'

//import { FeatureFlagGlobalState } from './feature-flag/context';
//import { FeatureFlags } from './feature-flag';




function App() {

  const handleUrl = () => {
    window.location.href = '/';
   
}
  return (
<>

      <BrowserRouter>
        <button onClick={handleUrl} className='h_btn'><IoHomeOutline style={{fontSize:'25px'}} /></button>
        <Routes>
      {/* home component*/}
          <Route path="/" element={<Home />} /> 
          
      {/* Accordian component */}
          <Route path="/accordian" element={<Accordian />} />
          
             {/* Modal component */}
          <Route path="/modal-test" element={<ModalTest/>} />
          
   {/* Custom tabs component */}
          <Route path="/tabtest" element={<TabTest />} />

           {/* Feature Flag IMplementation
     <Route path="/featureFlag" element={  <FeatureFlagGlobalState><FeatureFlags/></FeatureFlagGlobalState> }/> */}
      
      {/* Github profile finder */}
      <Route path="/githubProfileFinder" element={ <GithubProfileFinder/> }/>
    
  {/* Image slider component */}
  <Route path="/slider" element={  <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}
      /> }/>
   
     {/* light and dark theme switch */}
     <Route path="/lightDarkMode" element={ <LightDarkMode/> }/>
      
  {/* Load more products component */}
  <Route path="/loadMoreData" element={ <LoadMoreData/> }/>
      
     
      {/* QR code generator */}
      <Route path="/QrCodeGenerator" element={ <QRCodeGenerator/> }/>
      
       
     {/* Random color component */}
     <Route path="/randomColor" element={ <RandomColor/> }/>

      {/* Star rating component */}
      <Route path="/starRating" element={ <StarRating noOfStars={5}/> }/>

     
      {/* Tic tac toe */}
      <Route path="/ticTocToe" element={<TicTacToe/> }/>
       
         {/* Tree view component/menu UI component / recursive navigation menu */}
      <Route path="/treeView" element={ <TreeView menus={menus} /> }/>
    
        {/* useFetch - Custom Hook Test*/}
        <Route path="/UseFetchHookTest" element={<UseFetchHookTest/>  }/>
      

      {/* Use Onclick Outside Hook Test */}
      <Route path="/UseOnclickOutSideTest" element={ <UseOnclickOutsideTest/> }/>
      
   {/* Use Window Resize Hook Test */}
   <Route path="/UseWindowResizeTest" element={ <UseWindowResizeTest/> }/>

      {/* Scroll indicator component */}
      <Route path="/scrollIndicator" element={ <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> }/>
     
      {/* Scroll to Top and Bottom */}
      <Route path="/ScrollToTopAndBottom" element={<ScrollToTopAndBottom/> }/>
     
       {/* Search Autocomplete */}
       <Route path="/SearchAutoComplete" element={ <SearchAutoComplete/> }/>
          
          {/*Infinite scroll */}
             <Route path="/InfiniteScroll" element={<InfiniteScroll/>} />

 {/*controlled component */}
 <Route path="/ControlledComponent" element={< ControlledCopmponent/>} />

 {/*uncotrolled component */}
 <Route path="/UncontrolledComponent" element={<UncontrolledCopmponent/>} />

 {/*cotrolled with formik component */}
 <Route path="/ControlledWithFormik" element={<FormControlledFormik/>} />

 {/*Responsive Navbar */}
 <Route path="/responsivenavbar" element={<ResponsiveNavbar/>} />

{/*Pasgination*/}
<Route path="/Pagination" element={<Pagination/>} />

{/*ScrollToSection */}
          <Route path="/ScrollToSection" element={<ScrollToSection />} />
          
          {/*textHighlighter */}
<Route path="/textHighlighter" element={<TextHighlighter/>} />

      </Routes>
      </BrowserRouter>
     
    
    </>
  )
}

export default App
