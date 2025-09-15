import { Class } from '../types';
import { User } from '../types';

export const classes: Class[] = [
  { id: '1', name: 'Yoga Basics', level: 'Beginner', instructor: 'Alice', center: 'Center A' },
  { id: '2', name: 'Advanced Pilates', level: 'Advanced', instructor: 'Bob', center: 'Center B' },
  { id: '3', name: 'Intermediate Zumba', level: 'Intermediate', instructor: 'Carol', center: 'Center C' },
  
];

export const instructors = ['Alice', 'Bob', 'Carol','Joe'];



export const mockUser: User = {
  name: 'Devansh',
  mobile: '1234567890',
  credits: 8,
  city: 'Delhi',
  joinedDate: '2025-01-01',
};