import { RootErrorBoundary } from '@atoms/error/RootErrorBoundary'
import { Tags } from '@pages/tags/index'
import { About } from '@pages/about'
import {
  CollabContractsOverview,
  CollabDisplay,
  Collaborate,
  CreateCollaboration,
} from '@pages/collaborate'
import { Settings } from '@pages/config/Settings'
import { Subjkt } from '@pages/config/Subjkt'
import { DAO, Claim, ProposalDisplay } from '@pages/dao'
import {
  DaoParameters,
  DaoProposals,
  SubmitDaoProposals,
} from '@pages/dao/tabs'
import { TeiaPolls, PollDisplay } from '@pages/polls'
import { Polls, CreatePolls } from '@pages/polls/tabs'
import { FAQ } from '@pages/faq'
import { Home } from '@pages/home'
import FriendsFeed from '@pages/home/feeds/friends-feed'
import {
  IranFeed,
  PakistanFeed,
  UkraineFeed,
  AudioFeed,
  GifFeed,
  GlbFeed,
  HtmlSvgFeed,
  ImageFeed,
  VideoFeed,
  NewObjktsFeed,
  RandomFeed,
  RecentSalesFeed,
  TagFeed,
  PdfFeed,
  MarkdownFeed,
  TextFeed,
  QuakeFeed,
  MoroccoQuakeFeed,
  Tez4PalFeed,
  Art4ArtistsFeed,
} from '@pages/home/feeds'
import Mint from '@pages/mint'
import { ObjktDisplay } from '@pages/objkt-display'
import {
  Info,
  Burn,
  Collectors,
  History,
  Swap,
  Transfer,
  Copyright,
} from '@pages/objkt-display/tabs'
import Display from '@pages/profile'
import Collections from '@pages/profile/collections'
import Creations from '@pages/profile/creations'
import Collabs from '@pages/profile/collabs'
import Curation from '@pages/profile/curation'

import Sync from '@pages/sync'
import { Terms } from '@pages/terms'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './styles/index.scss'
import { IconCache } from '@utils/with-icon'
import { Preview } from '@components/preview/index'
import MintForm from '@components/form/MintForm'
import { ListsFeed } from '@pages/home/feeds/lists-feed'
import { MidiFeed } from '@pages/home/feeds/mime-type-feed'
import CopyrightForm from '@components/copyright/form/CopyrightForm'
import CopyrightPage from '@pages/copyright'
import { CopyrightPreview } from '@components/copyright/preview'
import CopyrightDisplay from '@components/copyright/display/CopyrightDisplay'
import { CodeOfConduct } from '@pages/codeofconduct'
import { CoreValues } from '@pages/corevalues'
import { PrivacyPolicy } from '@pages/privacypolicy'
import AdminCopyrightPage from '@pages/admincopyright'

const display_routes = (
  <>
    <Route index element={<Creations />} />
    <Route exact path="collection" element={<Collections />} />
    <Route exact path="curation" element={<Curation />} />
    <Route exact path="collabs" element={<Collabs />} />
    <Route exact path="copyrights" element={<CopyrightDisplay />} />
  </>
)

//TODO(mel): Check/Update site map / robot.txt
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" errorElement={<RootErrorBoundary />} element={<App />}>
      <Route path="/*" index element={<Home />} />
      <Route path="admincopyright" element={<AdminCopyrightPage />} />
      <Route path="feed/*" element={<Home />}>
        <Route path="sales" element={<RecentSalesFeed />} />
        <Route path="lists" element={<ListsFeed />} />

        <Route
          path="tezospride"
          element={<TagFeed tag="tezospride" namespace="tezospride" />}
        />

        <Route path="iran" element={<IranFeed />} />
        <Route path="tez4pal" element={<Tez4PalFeed />} />
        <Route path="art4artists" element={<Art4ArtistsFeed />} />
        <Route path="morocco-quake-aid" element={<MoroccoQuakeFeed />} />
        <Route path="quake-aid" element={<QuakeFeed />} />
        <Route path="iran" element={<IranFeed />} />
        <Route path="pakistan" element={<PakistanFeed />} />
        <Route path="ukraine" element={<UkraineFeed />} />
        <Route path="random" element={<RandomFeed />} />
        <Route path="newobjkts" element={<NewObjktsFeed />} />
        <Route path="glb" element={<GlbFeed />} />
        <Route path="video" element={<VideoFeed />} />
        <Route path="image" element={<ImageFeed />} />
        <Route path="audio" element={<AudioFeed />} />
        <Route path="html-svg" element={<HtmlSvgFeed />} />
        <Route path="pdf" element={<PdfFeed />} />
        <Route path="md" element={<MarkdownFeed />} />
        <Route path="txt" element={<TextFeed />} />
        <Route path="midi" element={<MidiFeed />} />

        <Route path="gif" element={<GifFeed />} />
        <Route path="friends/:address" element={<FriendsFeed />} />
      </Route>
      <Route path="search/*" element={<Home isSearch />} />

      <Route path="kt/:address" element={<Display />}>
        <Route index element={<CollabDisplay />} />
      </Route>
      <Route path="collab/:name" element={<Display />}>
        <Route index element={<CollabDisplay />} />
      </Route>
      <Route exact path="about" element={<About />} />
      <Route exact path="terms" element={<Terms />} />
      <Route exact path="faq" element={<FAQ />} />
      <Route exact path="codeofconduct" element={<CodeOfConduct />} />
      <Route exact path="corevalues" element={<CoreValues />} />
      <Route exact path="privacypolicy" element={<PrivacyPolicy />} />
      <Route path="sync" element={<Sync />} />
      <Route exact path="mint/*" element={<Mint />}>
        <Route index element={<MintForm />} />
        <Route path="preview" element={<Preview />} />
      </Route>
      <Route exact path="copyright/*" element={<CopyrightPage />}>
        <Route index element={<CopyrightForm />} />
        <Route path="copyrightpreview" element={<CopyrightPreview />} />
      </Route>
      <Route path="copyrightdisplay" element={<CopyrightDisplay />} />
      <Route path="collaborate/*" element={<Collaborate />}>
        <Route index element={<CollabContractsOverview />} />
        <Route path="create" element={<CreateCollaboration />} />
      </Route>
      <Route path="objkt/:id/*" element={<ObjktDisplay />}>
        <Route index element={<Info />} />
        <Route path="listings" element={<Collectors />} />
        <Route path="history" element={<History />} />
        <Route path="swap" element={<Swap />} />
        <Route path="burn" element={<Burn />} />
        <Route path="transfer" element={<Transfer />} />
        <Route path="copyright" element={<Copyright />} />
      </Route>
      <Route path="subjkt/*" element={<Subjkt />} />
      <Route path="settings/*" element={<Settings />} />
      <Route path="claim/*" element={<Claim />} />
      <Route path="dao/*" element={<DAO />}>
        <Route index element={<DaoParameters />} />
        <Route path="proposals" element={<DaoProposals />} />
        <Route path="submit" element={<SubmitDaoProposals />} />
        <Route path="*" element={<DaoParameters />} />
      </Route>
      <Route path="proposal/:id" element={<ProposalDisplay />} />
      <Route path="polls/*" element={<TeiaPolls />}>
        <Route index element={<Polls />} />
        <Route path="create" element={<CreatePolls />} />
        <Route path="*" element={<Polls />} />
      </Route>
      <Route path="poll/:id" element={<PollDisplay />} />
      <Route path="tags/:tag" element={<Tags />} />
      <Route path="tz/:address/*" element={<Display />}>
        {display_routes}
      </Route>

      <Route path=":name/*" element={<Display />}>
        {display_routes}
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <IconCache.Provider value={{}}>
    <RouterProvider router={router} />
  </IconCache.Provider>

  // </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
