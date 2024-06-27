// Import the ClassRoom class from the specified module
import ClassRoom from './0-classroom';

// Function to initialize an array of ClassRoom objects with specific sizes
export default function initializeRooms() {
  // Create and return an array of ClassRoom objects with sizes 19, 20, and 34
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
