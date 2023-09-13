import React from 'react'
import {ProfileDetails} from './cards/ProfileDetails'
import {StageTiga} from './cards/Stage3'
import {StageDua} from './cards/Stage2'

export function Settings() {
  return (
    <>
      <ProfileDetails />
      <StageDua />
      <StageTiga />
    </>
  )
}
