<?php

namespace Tests\Unit;

use App\Services\LatencyService;
use PHPUnit\Framework\TestCase;


final class LatencyTest extends TestCase
{
    public function test_latency_ms_is_calculated_correctly(): void
    {
        $svc = new LatencyService();

        $this->assertSame(1.0, $svc->ms(0, 1_000_000));
        $this->assertSame(0.0, $svc->ms(10, 9));
    }
}
