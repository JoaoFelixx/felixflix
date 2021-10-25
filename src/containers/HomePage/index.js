import { 
  Header,
  WatchTv,
  Download,
  GraySeparator,
  WatchWheneverYouWant,
  ProfileForChildren,
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
      <ProfileForChildren />
      <GraySeparator />
    </div>
  )
}
