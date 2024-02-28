import {describe,it,expect} from "vitest";
import {CProtypes} from "../CProtypes.js";
describe('CProtypes',()=>{
   it('should define Ctraslation',()=>{
      expect(typeof CProtypes).toBe('function');
   })
   it('should define Ctraslation Validate',()=>{
      expect(typeof CProtypes.VALIDATE).toBe('function');
   })
});