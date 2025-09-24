import React from 'react';
import { Input } from '@/components/ui/input';
import { LucideIcon } from 'lucide-react';

interface InputWithIconProps extends React.ComponentProps<typeof Input> {
  Icon: LucideIcon;
}

export function IconedInput({
  Icon,
  className,
  ...props
}: Readonly<InputWithIconProps>) {
  return (
    <div className='relative'>
      <Input {...props} className={`pr-10 ${className ?? ''}`} />
      <Icon
        className='absolute right-3 top-1/2 transform -translate-y-1/2 text-primary pointer-events-none '
        size={18}
      />
    </div>
  );
}
