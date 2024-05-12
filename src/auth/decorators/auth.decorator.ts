import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guard/jwt.guard.js';

export const Auth = () => UseGuards(JwtAuthGuard);
