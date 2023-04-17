<template>
  <div style="color: red">
    <TruncateReadMore :truncate-value="600" :only-if-more-than-value="20">
      <template #html>
        <div v-html="htmlData" />
      </template>
    </TruncateReadMore>

    <hr />

    <TruncateReadMore :truncate-value="600" :only-if-more-than-value="20">
      <template #html>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          fermentum, mauris eu pulvinar tempor, massa mi lobortis velit, non
          consectetur sapien magna et purus. Praesent nec ex magna. Nunc sit
          amet massa sagittis, suscipit enim eget, ultrices lacus. Nam euismod
          urna sit amet nibh maximus, nec rhoncus tellus sollicitudin. Nulla
          facilisi. Pellentesque tempor aliquam diam, eget posuere lectus
          elementum quis. Fusce gravida bibendum urna a venenatis. Nunc sit amet
          metus eget nisi fringilla bibendum quis ac ipsum.
        </p>
        <p>
          Sed quis sapien turpis. Ut faucibus eros vitae lacinia dictum.
          Praesent at faucibus tellus, quis elementum tortor. Suspendisse quis
          sapien id ante dapibus pharetra vel eget felis. Nam fringilla magna
          eget nulla laoreet elementum. Curabitur blandit nunc ac arcu
          ullamcorper blandit. Sed non dolor eget lorem rutrum posuere. Praesent
          ac elit risus.
        </p>
        <p>
          Sed quis sapien turpis. Ut faucibus eros vitae lacinia dictum.
          Praesent at faucibus tellus, quis elementum tortor. Suspendisse quis
          sapien id ante dapibus pharetra vel eget felis. Nam fringilla magna
          eget nulla laoreet elementum. Curabitur blandit nunc ac arcu
          ullamcorper blandit. Sed non dolor eget lorem rutrum posuere. Praesent
          ac elit risus.
        </p>
        <p>
          Sed quis sapien turpis. Ut faucibus eros vitae lacinia dictum.
          Praesent at faucibus tellus, quis elementum tortor. Suspendisse quis
          sapien id ante dapibus pharetra vel eget felis. Nam fringilla magna
          eget nulla laoreet elementum. Curabitur blandit nunc ac arcu
          ullamcorper blandit. Sed non dolor eget lorem rutrum posuere. Praesent
          ac elit risus.
        </p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        <p>
          Nunc sodales sapien in velit lacinia euismod. Donec ullamcorper
          tincidunt quam vel bibendum. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia Curae; Quisque feugiat libero
          id lacus luctus scelerisque. Fusce eget ligula aliquam, blandit arcu
          vel, eleifend augue. Sed id odio eu augue sollicitudin sagittis.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Sed lacinia leo et magna dapibus, ac aliquet
          neque suscipit.
        </p>
      </template>
    </TruncateReadMore>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlData: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum, mauris eu pulvinar tempor, massa mi lobortis velit, non consectetur sapien magna et purus. Praesent nec ex magna. Nunc sit amet massa sagittis, suscipit enim eget, ultrices lacus. Nam euismod urna sit amet nibh maximus, nec rhoncus tellus sollicitudin. Nulla facilisi. Pellentesque tempor aliquam diam, eget posuere lectus elementum quis. Fusce gravida bibendum urna a venenatis. Nunc sit amet metus eget nisi fringilla bibendum quis ac ipsum.</p>
          <p>Sed quis sapien turpis. Ut faucibus eros vitae lacinia dictum. Praesent at faucibus tellus, quis elementum tortor. Suspendisse quis sapien id ante dapibus pharetra vel eget felis. Nam fringilla magna eget nulla laoreet elementum. Curabitur blandit nunc ac arcu ullamcorper blandit. Sed non dolor eget lorem rutrum posuere. Praesent ac elit risus.</p>
          <p>Sed quis sapien turpis. Ut faucibus eros vitae lacinia dictum. Praesent at faucibus tellus, quis elementum tortor. Suspendisse quis sapien id ante dapibus pharetra vel eget felis. Nam fringilla magna eget nulla laoreet elementum. Curabitur blandit nunc ac arcu ullamcorper blandit. Sed non dolor eget lorem rutrum posuere. Praesent ac elit risus.</p>
          <p>Sed quis sapien turpis. Ut faucibus eros vitae lacinia dictum. Praesent at faucibus tellus, quis elementum tortor. Suspendisse quis sapien id ante dapibus pharetra vel eget felis. Nam fringilla magna eget nulla laoreet elementum. Curabitur blandit nunc ac arcu ullamcorper blandit. Sed non dolor eget lorem rutrum posuere. Praesent ac elit risus.</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
          <p>Nunc sodales sapien in velit lacinia euismod. Donec ullamcorper tincidunt quam vel bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque feugiat libero id lacus luctus scelerisque. Fusce eget ligula aliquam, blandit arcu vel, eleifend augue. Sed id odio eu augue sollicitudin sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed lacinia leo et magna dapibus, ac aliquet neque suscipit.</p>`,
    };
  },
};
</script>
