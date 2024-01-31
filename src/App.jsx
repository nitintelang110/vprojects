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


  return (
<>
<ResponsiveNavbar/>
</>
  )
}

export default App
