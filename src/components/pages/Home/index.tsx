import React from 'react';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenu,
  IonList,
  IonIcon,
  IonMenuToggle,
  IonLabel,
  IonPage,
  IonButtons,
  IonButton,
  IonItem
} from '@ionic/react';

import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

import { menu, skull, statsChart } from 'ionicons/icons'

// import landingpage from '../../resources/images/landingpage.jpg';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


import '../../theme/variables.css';
import './Home.css';
import { Link } from 'react-router-dom';


const Home: React.FC = () => (
  <IonApp>
    <IonMenu content-id="main-content">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <IonList>
          <IonMenuToggle auto-hide="false">
            <IonItem button className="menu-button-padding">
                <IonIcon slot="start" icon={statsChart}></IonIcon>
                <Link to="/graph" className="link">
                  <IonLabel>
                    Graph
                  </IonLabel>
                </Link>  
            </IonItem>
            <IonItem button className="menu-button-padding">
                <IonIcon slot="start" icon={skull}></IonIcon>
                <Link to="/stats" className="link">
                  <IonLabel >
                    Stats
                  </IonLabel>
              </Link>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonPage className="ion-page" id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuToggle>
              <IonButton>
                <IonIcon slot="icon-only" icon={menu}></IonIcon>
              </IonButton>
            </IonMenuToggle>
          </IonButtons>
          <IonTitle>Welcome!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" id="main-content">
        <IonCard className="info-card-content">
          <IonCardHeader>
            <IonCardTitle className="info-box-title">
              Amazing Canoes
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-wrap">
            <p>Amazing Canoes consists of a small developers team that aim to rise awareness on the rising number of Coronavirus cases around the world.</p>
            <br />
            <p> Here you can find reliable data on Covid-19 and some advice on how to protect yourself and the people around you. Our goal is to help and share information to the public in order to highlight the danger of this pandamic and save lives.  </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  </IonApp>
);

export default Home;
