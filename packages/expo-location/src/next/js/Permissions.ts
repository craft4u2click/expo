import { createPermissionHook } from 'expo-modules-core';

import { NativeLocationModuleNext } from '../native';
import { RequestForegroundPermissionsAccuracyOption } from '../types';
import type { LocationPermissionResponse, RequestForegroundPermissionsOptions } from '../types';

export async function getForegroundPermissionsAsync(): Promise<LocationPermissionResponse> {
  return NativeLocationModuleNext.getForegroundPermissions();
}

export async function requestForegroundPermissionsAsync(
  options: RequestForegroundPermissionsOptions = {
    accuracy: RequestForegroundPermissionsAccuracyOption.FULL,
  }
): Promise<LocationPermissionResponse> {
  return NativeLocationModuleNext.requestForegroundPermissions(options);
}

export async function getBackgroundPermissionsAsync(): Promise<LocationPermissionResponse> {
  return NativeLocationModuleNext.getBackgroundPermissions();
}

export async function requestBackgroundPermissionsAsync(): Promise<LocationPermissionResponse> {
  return NativeLocationModuleNext.requestBackgroundPermissions();
}

export const useForegroundPermissions = createPermissionHook({
  getMethod: getForegroundPermissionsAsync,
  requestMethod: requestForegroundPermissionsAsync,
});

export const useBackgroundPermissions = createPermissionHook({
  getMethod: getBackgroundPermissionsAsync,
  requestMethod: requestBackgroundPermissionsAsync,
});
