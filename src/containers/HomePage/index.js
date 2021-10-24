import { 
  Header,
  WatchTv,
  Download,
  GraySeparator,
  WatchWheneverYouWant,
} from '../../components';

export const HomePage = () => {
  return (
    <div>
      <Header />
      <GraySeparator />
      <WatchTv />
      <GraySeparator />
      <Download />
      <GraySeparator />
      <WatchWheneverYouWant />
      <GraySeparator />
    </div>
  )
}
