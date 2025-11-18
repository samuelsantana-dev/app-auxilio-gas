import { Slot } from 'expo-router';
import './style/style.css';
export default function RootLayout() {
  return <Slot />;
}

// Forma antiga
// export default function RootLayout() {
//   return <Stack />;
// }