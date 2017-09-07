import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import renderScenes from './utils/renderScene';
import { project } from './config';
import * as scene from './scenes'

export const Scenes = [
  { key: `${project.name}Form`, component: 'Form', options: {} },
  { key: `${project.name}DefaultForm`, component: 'DefaultFrom', options: {} },
  { key: `${project.name}InitForm`, component: 'InitFrom',  options: {} },
  { key: `${project.name}ValidateForm`, component: 'ValidateFrom', options: {} },
]

const Routes = () => (
  <Router hideNavBar>
    <Scene key="modularHome" component={scene.Home} initial  />
    <Scene key="errorPage" component={scene.ErrorToken} />
    {renderScenes(Scenes, scene)}
  </Router>
)

export default Routes
