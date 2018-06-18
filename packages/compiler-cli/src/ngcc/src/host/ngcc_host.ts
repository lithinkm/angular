/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

 import { ReflectionHost } from '../../../ngtsc/host';

/**
 * A reflection host that has extra methods for looking at non-Typescript package formats
 */
export interface NgccReflectionHost extends ReflectionHost {
  // we might add some ngcc specific stuff that is needed in here
}