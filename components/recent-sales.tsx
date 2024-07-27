import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Om Mahajan</p>
          <p className="text-sm text-muted-foreground">
            ommahajan45@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+₹1,999.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jayprakash Lal</p>
          <p className="text-sm text-muted-foreground">jayprakash89@email.com</p>
        </div>
        <div className="ml-auto font-medium">+₹39.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Isha Narola</p>
          <p className="text-sm text-muted-foreground">
            isha780@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+₹299.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Wazid Khan</p>
          <p className="text-sm text-muted-foreground">wazidk32@email.com</p>
        </div>
        <div className="ml-auto font-medium">+₹99.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sohan Das</p>
          <p className="text-sm text-muted-foreground">sohandas90@email.com</p>
        </div>
        <div className="ml-auto font-medium">+₹39.00</div>
      </div>
    </div>
  );
}
