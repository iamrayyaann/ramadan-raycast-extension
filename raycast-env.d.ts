/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** City - Your city name */
  "city": string,
  /** Country - Your country name */
  "country": string,
  /** Calculation Method - Prayer time calculation method */
  "method": "2" | "3" | "5" | "4" | "1" | "7" | "8" | "9" | "10" | "11" | "13" | "14" | "15",
  /** Hijri Date Offset (days) - Adjust by +/- days to match local moon sighting */
  "hijriDateOffset": string,
  /** Time Format - Time display format */
  "timeFormat": "system" | "12hr" | "24hr"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `suhoor` command */
  export type Suhoor = ExtensionPreferences & {}
  /** Preferences accessible in the `iftar` command */
  export type Iftar = ExtensionPreferences & {}
  /** Preferences accessible in the `calendar` command */
  export type Calendar = ExtensionPreferences & {}
  /** Preferences accessible in the `menu-bar` command */
  export type MenuBar = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `suhoor` command */
  export type Suhoor = {}
  /** Arguments passed to the `iftar` command */
  export type Iftar = {}
  /** Arguments passed to the `calendar` command */
  export type Calendar = {}
  /** Arguments passed to the `menu-bar` command */
  export type MenuBar = {}
}

