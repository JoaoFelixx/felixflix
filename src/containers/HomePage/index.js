import { 
  Header,
  WatchTv,
  Download,
  GraySeparator,
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
    </div>
  )
}
