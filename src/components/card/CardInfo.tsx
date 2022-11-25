import { Badge } from '@/components/card/Badge';

interface Props {
  description: Unspash.Result['description'];
  tags: Unspash.Tag[];
}

export function CardInfo({ description, tags = [] }: Props) {
  return (
    <>
      <h3 className='text-xl text-blue-1'>{description}</h3>
      <div className='flex flex-row flex-wrap gap-2'>
        {tags.map((badge, idx) => (
          <Badge key={idx}>{badge.title}</Badge>
        ))}
      </div>
    </>
  );
}
