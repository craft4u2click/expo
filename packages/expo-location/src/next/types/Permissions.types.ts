import type { PermissionResponse } from 'expo';

export enum LocationScope {
  ALWAYS = 'always',
  WHEN_IN_USE = 'whenInUse',
  NOT_GRANTED = 'notGranted',
}

export enum LocationAccuracy {
  FULL = 'full',
  REDUCED = 'reduced',
  NOT_GRANTED = 'notGranted',
}

export enum RequestForegroundPermissionsAccuracyOption {
  FULL = 'FULL',
  REDUCED = 'REDUCED',
}

export type LocationPermissionResponse = PermissionResponse & {
  scope: LocationScope;
  accuracy: LocationAccuracy;
};

export type RequestForegroundPermissionsOptions = {
  accuracy?: RequestForegroundPermissionsAccuracyOption;
  fullAccuracyPurposeKey?: string;
};
